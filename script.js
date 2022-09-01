'use strict';
// -------Variables-------------------
const menuBtn = document.querySelector('.nav__menu');
const hamburger = document.querySelector('.nav__burger');
const menu = document.querySelector('.nav__links');
const mobLogo = document.querySelector('.mobile-logo');
const links = document.querySelectorAll('.nav__link');
let showMenu = false;
// ------- Hamburger menu ------------

function openModalWindow() {
  hamburger.classList.add('open');
  menu.classList.add('open');
  mobLogo.classList.add('hidden');
  document.querySelector('body').classList.add('prevent-scroll');
  links.forEach((i) => {
    i.classList.add('open');
    i.addEventListener('click', () => {
      hamburger.classList.remove('open');
      menu.classList.remove('open');
      mobLogo.classList.remove('hidden');
      document.querySelector('body').classList.remove('prevent-scroll');
      links.forEach((i) => {
        i.classList.remove('open');
      });
      showMenu = false;
    });
  });
  showMenu = true;
}
function closeModalWindow() {
  hamburger.classList.remove('open');
  menu.classList.remove('open');
  mobLogo.classList.remove('hidden');
  document.querySelector('body').classList.remove('prevent-scroll');
  links.forEach((i) => {
    i.classList.remove('open');
  });
  showMenu = false;
}
menuBtn.addEventListener('click', () => {
  if (!showMenu) {
    openModalWindow();
  } else {
    closeModalWindow();
  }
});
// --------Scroll to top btn------
const scroll = document.querySelector('.scroll-top-btn ');

window.addEventListener('scroll', () => {
  scroll.classList.toggle('active', window.scrollY > 500);
});
// --------Scroll function--------
function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
// --------
scroll.addEventListener('click', () => {
  scrollTop();
});
