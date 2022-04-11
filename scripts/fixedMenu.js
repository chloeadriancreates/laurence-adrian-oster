/* Top-level variables */
const menu = document.getElementById('menu');
const menuHeight = menu.offsetHeight;
const menuTitle = document.querySelector('.menu_title');
const menuButton = document.querySelector('.menu_button');
const footer = document.querySelector('.footer');

/* Fixed menu */
function fixedMenu() {
    if(window.pageYOffset > 0) {
        menu.classList.add('menu--fixed');
        menuButton.classList.add('menu_button--fixed');
        menuTitle.style.opacity = 1;
        menuTitle.setAttribute('tabindex', 0);
    } else {
        menu.classList.remove('menu--fixed');
        menuButton.classList.remove('menu_button--fixed');
        menuTitle.style.opacity = 0;
        menuTitle.setAttribute('tabindex', -1);
    }
}

window.onscroll = function() {
    if(window.width > 500) {
        fixedMenu();
    } else {
        footer.style.paddingBottom = menuHeight + 50 + 'px';
    }
}