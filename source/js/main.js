'use strict';

var header = document.querySelector('.header');
var menuToggler = document.querySelector('.header__menu');
var questionsTogglers = document.querySelectorAll('.questions__item button');

header.classList.remove('header--menu-opened');

menuToggler.addEventListener('click', function() {
  if (header.classList.contains('header--menu-opened')) {
    header.classList.remove('header--menu-opened');
  } else {
    header.classList.add('header--menu-opened');
  }
});

questionsTogglers.forEach((btn) => {
  btn.classList.remove('active');

  btn.addEventListener('click', function() {
    if (btn.classList.contains('active')) {
      btn.classList.remove('active');
    } else {
      btn.classList.add('active');
    }
  });
});
