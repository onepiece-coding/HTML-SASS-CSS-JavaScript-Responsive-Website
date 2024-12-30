
// Select the humburger menu toggle button
const menuToggle = document.querySelector(
    ".navbar__menu-toggle"
);
// Select the navigation menu
const menu = document.querySelector(".navbar__menu");

// Add click event listener to toggle the menu visibility
menuToggle.addEventListener("click", function () {
    menu.classList.toggle("menu__open"); /* Add/Remove the 'menu__open' class to show/hide the menu */
});
