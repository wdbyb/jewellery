'use strict';

var header = document.querySelector('.header');
var menuToggler = document.querySelector('.header__menu');

header.classList.remove('header--menu-opened');

menuToggler.addEventListener('click', function() {
  if (header.classList.contains('header--menu-opened')) {
    header.classList.remove('header--menu-opened');
  } else {
    header.classList.add('header--menu-opened');
  }
});
