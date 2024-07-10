// script.js

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById('navbar');
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.querySelector('nav ul');

    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('show');
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
});

