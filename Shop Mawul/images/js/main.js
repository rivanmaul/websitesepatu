const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');

// MOBILE MENU 
if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
}

// PRODUCT DETAILS PAGE
let mainImage = document.getElementById('item-image-main');
let subImage = document.getElementsByClassName('item-image-sub');


subImage[0].onclick = function() {
    mainImage.src = subImage[0].src;
};
subImage[1].onclick = function() {
    mainImage.src = subImage[1].src;
};
subImage[2].onclick = function() {
    mainImage.src = subImage[2].src;
};
subImage[3].onclick = function() {
    mainImage.src = subImage[3].src;
};
