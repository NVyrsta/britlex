'use strict';
// ------- Hamburger menu ------------
const menuBtn = document.querySelector('.nav__menu');
const hamburger = document.querySelector('.nav__burger');
let showMenu = false;
menuBtn.addEventListener('click', () => {
  if (!showMenu) {
    hamburger.classList.add('open');
    showMenu = true;
    console.log(hamburger);
  } else {
    hamburger.classList.remove('open');
    showMenu = false;
    console.log(hamburger);
  }
});
