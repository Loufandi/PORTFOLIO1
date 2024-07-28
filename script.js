// script.js

document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.skill-circle');
    
    circles.forEach(circle => {
      circle.addEventListener('mouseenter', function() {
        this.style.fill = '#0056b3';
      });
      
      circle.addEventListener('mouseleave', function() {
        this.style.fill = '#ff5722';
      });
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    const certifications = document.querySelectorAll('.certification');
    
    function checkVisibility() {
      const windowHeight = window.innerHeight;
      certifications.forEach(cert => {
        const rect = cert.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom >= 0) {
          cert.classList.add('visible');
        }
      });
    }
  
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Vérifiez la visibilité au chargement
  });
  
  