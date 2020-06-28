const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNav = document.querySelector('.mobile-menu__nav');

const toggleMobileNav = () => {
  if (mobileNav.classList.contains('hide')) {
    overlay.classList.remove('hide');
    mobileMenu.classList.add('open');
  } else {
    overlay.classList.add('hide');
    mobileMenu.classList.remove('open');
  }
  mobileNav.classList.toggle('hide');
};
