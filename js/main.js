const swiper = new Swiper('.swiper-container', {
  // Optional parameters
    loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  });

const reviews = new Swiper('.reviews-main', {
  // Optional parameters
    loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-button--next',
    prevEl: '.reviews-button--prev',
  },
  });

var menuButton = document.querySelector(".header-top-menu-burger");
menuButton.addEventListener("click", function() {
console.log("Клик по кнопке");
document
.querySelector(".header-navigation-conteiner")
.classList.toggle(".header-navigation-conteiner--visible");
});
