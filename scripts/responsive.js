/* Top-level variables */
const heroColor = document.querySelector('.hero_color');
const heroPicture = document.querySelector('.hero_picture');

function adaptHeroSection() {
    if(window.innerWidth > 500) {
        console.log(window.innerWidth);
        heroColor.setAttribute('src', 'img/desktop/hero_color.png');
        heroPicture.setAttribute('src', 'img/desktop/hero_picture.png');
    } else {
        heroColor.setAttribute('src', 'img/mobile/hero_color.png');
        heroPicture.setAttribute('src', 'img/mobile/hero_picture.png');
    }
}

adaptHeroSection();