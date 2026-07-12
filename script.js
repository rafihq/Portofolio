/**
 * script.js
 * Client-side script for portfolio Muhammad Rafi Pratama Putra
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Menu Toggle ---
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking navigation link on mobile
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // --- Copy to Clipboard Utility ---
  const copyButtons = document.querySelectorAll('.copy-btn, .copy-btn-text');
  const toast = document.getElementById('toast');
  
  copyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const textToCopy = button.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            showToast();
          })
          .catch(err => {
            console.error('Gagal menyalin teks: ', err);
          });
      }
    });
  });

  function showToast() {
    if (toast) {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2500);
    }
  }

  // --- Scrollspy: Dynamic Link Highlighting ---
  const sections = document.querySelectorAll('section[id]');
  const menuLinks = document.querySelectorAll('.nav-link');

  function scrollSpy() {
    const scrollPosition = window.scrollY + 120; // offset navbar height

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        menuLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', scrollSpy);
  // Run once on load to initialize active state
  scrollSpy();
});
