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

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      pagination: {
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
        },
      }
    },
    768: {
      slidesPerView: 2,
      pagination: {
        type: 'bullets',
      }
    },
    1024: {
      slidesPerView: 4,
    }
  }
});
