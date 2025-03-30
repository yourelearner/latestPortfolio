document.addEventListener('DOMContentLoaded', () => {
  // Select elements
  const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
  const smallMenu = document.querySelector('.header__sm-menu');
  const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
  const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close');
  const logoSub = document.querySelector('.header__logo-sub');

  // Check if elements exist before adding event listeners
  if (hamMenuBtn && smallMenu && headerHamMenuBtn && headerHamMenuCloseBtn) {
    // Toggle the small menu and hamburger icons
    hamMenuBtn.addEventListener('click', () => {
      smallMenu.classList.toggle('header__sm-menu--active');
      headerHamMenuBtn.classList.toggle('d-none');
      headerHamMenuCloseBtn.classList.toggle('d-none');
      console.log('Hamburger menu clicked'); // Debugging log
    });
  } else {
    console.error('One or more elements are missing. Check your HTML structure.');
  }

  // Add click event to the logo
  if (logoSub) {
    logoSub.addEventListener('click', () => {
      console.log('Logo clicked');
      window.location.href = './index.html'; // Redirect to the home page
    });
  } else {
    console.error('Logo element not found.');
  }
});