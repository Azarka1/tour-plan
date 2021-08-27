const images = document.querySelectorAll('.reviews-main .reviews-info .text');
const reviewsLine = document.querySelector('.reviews-main .reviews-info');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.reviews-main').offsetWidth;
    reviewsLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollReviews();
}

init();
window.addEventListener('resize', init);

document.querySelector('.reviews-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollReviews();
});

document.querySelector('.reviews-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollReviews();
});

function rollReviews() {
    reviewsLine.style.transform = 'translate(-' + count * width + 'px)';

}

//Валидация формы
$('.form').each(function() {
$(this).validate({
    errorClass: "invalid",
    messages: {
    name: {
       required: "Enter your name",
       minlength: "Name is more 2 symbols"
    },
    email: {
      required: "Enter your e-mail",
      email: "Your email address must be in the format of name@domain.com"
    },
    phone: {
        required: "Enter your phone nomber"
    },
  },
});
});


jQuery(function($){
   $("input[type='tel']").mask("+7(999) 999-9999");
});


AOS.init();