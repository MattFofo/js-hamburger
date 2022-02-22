

let mainMenu = document.querySelector('.hamburger-menu');
let btnHamb = document.querySelector('.fa-bars');
let btnClose = document.querySelector('.fa-times');



btnHamb.addEventListener('click', function() {
    mainMenu.classList.add('active');

});


btnClose.addEventListener('click', function() {
    mainMenu.classList.remove('active');
});



btnHamb.addEventListener('click', function() {
    mainMenu.style.display = 'block';

});


btnClose.addEventListener('click', function() {
    mainMenu.style.display = 'none';
});










// btnHamb.addEventListener('click', function() {
//     mainMenu.classList = 'hamburger-menu.active';
//     
    
// });




