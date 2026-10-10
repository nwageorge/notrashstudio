const form = document.querySelector('#project-form');
const status = document.querySelector('#form-status');
form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const message = [
    'Hi NoTrash Studio — I would like to start a project.',
    '',
    `Name: ${data.get('name')}`,
    `Email: ${data.get('email')}`,
    `Service: ${data.get('service')}`,
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
