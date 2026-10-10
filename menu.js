const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const closeButton = menu.querySelector('.menu-close');

const markCurrent = () => {
  let current = null;
  menu.querySelectorAll('.menu-primary a[href^="#"]').forEach((link) => {
    link.removeAttribute('aria-current');
    const section = document.querySelector(link.getAttribute('href'));
    if (section && section.getBoundingClientRect().top <= innerHeight / 2) current = link;
  });
  if (current) current.setAttribute('aria-current', 'true');
};

const setMenu = (open, moveFocus = true) => {
  if (open) markCurrent();
  menu.classList.toggle('open', open);
  menu.inert = !open;
  toggle.setAttribute('aria-expanded', open);
  document.body.classList.toggle('menu-open', open);
  if (moveFocus) (open ? closeButton : toggle).focus({ preventScroll: true });
};

toggle.addEventListener('click', () => setMenu(true));
closeButton.addEventListener('click', () => setMenu(false));
menu.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link) return;
  setMenu(false, false);
  const hash = link.getAttribute('href');
  const section = hash.startsWith('#') && document.querySelector(hash);
  if (!section) return;
  // Scroll once the page behind the menu is unlocked.
  event.preventDefault();
  setTimeout(() => {
    section.scrollIntoView();
    history.pushState(null, '', hash);
  }, 50);
});
addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.classList.contains('open')) setMenu(false);
});
matchMedia('(min-width: 901px)').addEventListener('change', (event) => {
  if (event.matches && menu.classList.contains('open')) setMenu(false);
});
