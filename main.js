

let mainMenu = document.querySelector('.hamburger-menu');
let btnHamb = document.querySelector('.header-right > a');
let btnClose = document.querySelector('.close');

// metodo 1

btnHamb.addEventListener('click', function() {
    mainMenu.classList.add('active');

});


btnClose.addEventListener('click', function() {
    mainMenu.classList.remove('active');
});


// metodo 2

// btnHamb.addEventListener('click', function() {
//     mainMenu.style.display = 'block';

// });


// btnClose.addEventListener('click', function() {
//     mainMenu.style.display = 'none';
// });











