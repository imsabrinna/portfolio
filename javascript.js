// Efeito Fade in

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.fade-in');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.4 }); // Quando 10% do elemento for visível
  
    elements.forEach(el => observer.observe(el));
  });
  