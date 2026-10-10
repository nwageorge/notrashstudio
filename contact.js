const form = document.querySelector('#project-form');
const status = document.querySelector('#form-status');
const statusTitle = status?.querySelector('strong');
const statusText = status?.querySelector('span');
const fallbackLink = status?.querySelector('a');
const button = form?.querySelector('button[type="submit"]');
const buttonLabel = button?.innerHTML;

const showStatus = (title, text, showFallback) => {
  statusTitle.textContent = title;
  statusText.textContent = text;
  fallbackLink.hidden = !showFallback;
  status.hidden = false;
  status.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const payload = {
    access_key: 'e8821e1d-504f-4b32-b951-727d4428f5e5',
    subject: `New project inquiry — ${data.get('service')}`,
    from_name: 'NoTrash Studio website',
    name: data.get('name'),
    email: data.get('email'),
    phone: data.get('phone') || 'Not provided',
    service: data.get('service'),
    message: data.get('message'),
    botcheck: data.get('botcheck') ? 'true' : ''
  };

  button.disabled = true;
  button.textContent = 'Sending…';
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    if (!result.success) throw new Error(result.message);
    form.reset();
    showStatus('Your message is sent.', 'Thanks for reaching out. We’ll reply by email soon.', false);
  } catch {
    showStatus('Your message didn’t send.', 'Please try again in a moment, or message us on Instagram instead.', true);
  } finally {
    button.disabled = false;
    button.innerHTML = buttonLabel;
  }
});
