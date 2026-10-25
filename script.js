
/* AUTO LOOKOUT - INTERACTIVITY */

// Smooth navigation
document.querySelectorAll('a[href^="#"]')
  .forEach(link => {
    link.addEventListener('click', event => {
      const target = document.querySelector(
        link.getAttribute('href')
      );

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

// Animate car cards when they appear
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.car-card')
  .forEach(card => {
    card.classList.add('animate-card');
    observer.observe(card);
  });

// Make car cards clickable
const categories = {
  'Supercars': 'Supercars combine extreme performance, advanced aerodynamics and powerful engines.',
  'Luxury Cars': 'Luxury cars focus on comfort, craftsmanship and innovative technology.',
  'Classic Cars': 'Classic cars preserve the engineering and design history of the automobile.'
};

document.querySelectorAll('.car-card')
  .forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h3').textContent;
      alert(categories[title]);
    });
  });

