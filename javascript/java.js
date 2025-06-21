// Header scrollinh for sticky

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

// Hamburger menu toggle
const navMenu = document.querySelector('.navmenu');
(document.getElementById('menu-icon')).addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Dropdown for mobile/tablet
const dropdown = document.querySelector('.dropdown');
const dropdownLink = dropdown.querySelector('a');

dropdownLink.addEventListener('click', function (e) {
  // Only for mobile/tablet
  if (window.innerWidth <= 750) {
    e.preventDefault();
    dropdown.classList.toggle('open');
  }
});

// Navbar Close


