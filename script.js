const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
menuToggle?.addEventListener('click', () => menu.classList.toggle('show'));

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => menu.classList.remove('show'));
});
