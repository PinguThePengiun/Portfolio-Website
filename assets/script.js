const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

const toggleMenu = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

menuIcon.addEventListener('click', toggleMenu);

// Optional: Add keyboard accessibility
menuIcon.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    toggleMenu();
  }
});