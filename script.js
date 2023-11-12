const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 100)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open'); // Toggle the 'open' class on the navlist element
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open'); // Remove the 'open' class on scroll
};