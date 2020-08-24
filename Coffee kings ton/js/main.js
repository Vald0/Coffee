const menuBtn = document.querySelector('.menu-btn');
const selector = document.querySelector('.selector');
const header = document.querySelector('.header');
let menuOpen = 0;


/*menuBtn.addEventListener('click', () => {
    if (menuOpen == 0) {
        menuBtn.classList.add('open');
        menuOpen = 1;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = 0;
    }
});*/
/* Lenguaje original */

selector.addEventListener('click', () => {
    if (menuOpen == 1) {
        menuBtn.classList.remove('open');
        menuOpen = 0;
    } else {
        menuBtn.classList.add('open');
        menuOpen = 1;
    }
});

header.addEventListener('click', () => {
    if (menuOpen == 1) {
        menuBtn.classList.remove('open');
        menuOpen = 0;
    } else {
        menuBtn.classList.add('open');
        menuOpen = 1;
    }
})