const hamburgerIcon = document.querySelector('.hamburger-menu-container');
const closeIcon = document.querySelector('.close-icon')
const gotToTop = document.querySelector('.go-to-top');
const mainMenu = document.querySelector('.main-content')
const nav = document.querySelector('.nav');
hamburgerIcon.addEventListener('click', (e) => {
  e.stopPropagation();
  hamburgerIcon.parentElement.classList.add('menu-open');
});

nav.addEventListener('click', (e) => {
    e.stopPropagation();
});

closeIcon.addEventListener('click', () => {
  hamburgerIcon.parentElement.classList.remove('menu-open');
});

gotToTop.addEventListener('click', () => {
    mainMenu.scrollTo(0,0);
});
window.addEventListener('click', () => {
    hamburgerIcon.parentElement.classList.remove('menu-open');
  });