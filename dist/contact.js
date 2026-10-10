const form = document.querySelector('#project-form');
const status = document.querySelector('#form-status');
const service = document.querySelector('#service');
const serviceNote = document.querySelector('#service-note');
const conversations = document.querySelectorAll('.conversation');

conversations.forEach((button) => button.addEventListener('click', () => {
  conversations.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  service.value = button.dataset.service;
  serviceNote.textContent = button.dataset.note;
  service.focus({ preventScroll:true });
}));

service?.addEventListener('change', () => {
  const match = [...conversations].find(button => button.dataset.service === service.value);
  conversations.forEach(item => item.classList.toggle('active', item === match));
  if (match) serviceNote.textContent = match.dataset.note;
});

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const message = [
    'Hi NoTrash Studio — I would like to start a project.',
    '',
    `Name: ${data.get('name')}`,
    `Email: ${data.get('email')}`,
    `Company: ${data.get('company') || 'Not provided'}`,
    `Service: ${data.get('service')}`,
    `Budget: ${data.get('budget') || 'Not provided'}`,
    `Timeline: ${data.get('timeline')}`,
    '',
    'Project details:',
    data.get('message')
  ].join('\n');

  try { await navigator.clipboard.writeText(message); }
  catch { window.prompt('Copy your project inquiry, then send it to @notrashstudio:', message); }

  status.hidden = false;
  status.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  window.open('https://instagram.com/notrashstudio', '_blank', 'noopener,noreferrer');
});
