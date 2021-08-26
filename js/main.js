

document.addEventListener("DOMContentLoaded", function(event) {
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
.querySelector(".header-navigator-conteiner")
.classList.toggle("header-navigator-conteiner--visible");
});
});

var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

function openModal() {
var modalOverlay = $(".modal__overlay");
var modalDialog = $(".modal__dialog");
modalOverlay.addClass("modal__overlay--visible");
modalDialog.addClass("modal__dialog--visible");
}
function closeModal(event) {
  event.preventDefault();
var modalOverlay = $(".modal__overlay");
var modalDialog = $(".modal__dialog");
modalOverlay.removeClass("modal__overlay--visible");
modalDialog.removeClass("modal__dialog--visible");
}

