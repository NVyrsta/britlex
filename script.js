'use strict';
// ------- Hamburger menu ------------
const menuBtn = document.querySelector('.nav__menu');
const hamburger = document.querySelector('.nav__burger');
const menu = document.querySelector('.nav__links');
const mobLogo = document.querySelector('.mobile-logo');
const links = document.querySelectorAll('.nav__link');
let showMenu = false;
menuBtn.addEventListener('click', () => {
  if (!showMenu) {
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
  } else {
    hamburger.classList.remove('open');
    menu.classList.remove('open');
    mobLogo.classList.remove('hidden');
    document.querySelector('body').classList.remove('prevent-scroll');

    links.forEach((i) => {
      i.classList.remove('open');
    });
    showMenu = false;
  }
});
