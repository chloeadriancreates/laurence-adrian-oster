/* Top-level variables */
const cabinetButton = document.getElementById('cabinet_button');
const cabinet = document.getElementById('cabinet');
const prestationsButton = document.getElementById('prestations_button');
const prestations = document.getElementById('prestations');

/* Scrolling from menu */
function smoothScroll(anchor) {
    const elementPosition = anchor.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - menuHeight;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}

cabinetButton.addEventListener('click', function() {
    smoothScroll(cabinet);
});

prestationsButton.addEventListener('click', function() {
    smoothScroll(prestations);
});