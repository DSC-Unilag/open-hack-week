const mobileMenu = document.querySelector('.mobile-menu');
const mobileNav = document.querySelector('.mobile-menu__nav');

const toggleMobileNav = () => {
  if (mobileNav.classList.contains('hide')) {
    mobileMenu.classList.add('open');
  } else {
    mobileMenu.classList.remove('open');
  }
  mobileNav.classList.toggle('hide');
};
