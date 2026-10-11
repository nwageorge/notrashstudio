const progress = document.querySelector('.progress');
const updateProgress = () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${max > 0 ? (scrollY / max) * 100 : 0}%`;
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .14 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
// Match the colour behind the page to the blue closing section, so no
// off-white strip shows below it when the browser overscrolls or resizes its bars.
const closing = document.querySelector('.contact');
const updateBackdrop = () => {
  document.documentElement.classList.toggle('at-end', closing.getBoundingClientRect().top < innerHeight / 2);
};

const onScroll = () => { updateProgress(); updateBackdrop(); };
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', onScroll);
onScroll();
