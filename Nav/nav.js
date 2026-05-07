const burgerMenu = document.querySelector('nav');

const closeBtn = burgerMenu.querySelector('a.close-btn');

const openBtn = document.querySelector('a.open-btn');

console.log(burgerMenu, closeBtn, openBtn);

openBtn.addEventListener('click', function (e) {
    e.preventDefault(); 
    burgerMenu.classList.add('visible');
});

closeBtn.addEventListener('click', function (e) {
    e.preventDefault(); 
    burgerMenu.classList.remove('visible');
});