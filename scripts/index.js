const menu = document.querySelector('.header__menu');
const list = document.querySelector('.header__list');
const closeButton = document.querySelector('.header__close');
const text = document.querySelector('.info__text');

function closeOrOpenMenu() {
    list.classList.toggle('header__list-on');
    closeButton.classList.toggle('header__close-on');
    menu.classList.toggle('header__menu-off');
};

menu.addEventListener('click', closeOrOpenMenu);
closeButton.addEventListener('click', closeOrOpenMenu);

fetch('https://baconipsum.com/api/?type=lucky')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let randIndex = Math.floor(Math.random() * data.length)
        console.log(randIndex);
        console.log(data[randIndex]);
        text.innerHTML = data[randIndex];
    });