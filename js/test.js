let offset = 0;
const sliderLine = document.querySelector('.reviews-info');

document.querySelector('.reviews-next').addEventListener('click', function(){
    offset = offset + 731;
    if (offset > 731) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.reviews-prev').addEventListener('click', function () {
    offset = offset - 731;
    if (offset < 0) {
        offset = 731;
    }
    sliderLine.style.left = -offset + 'px';
});