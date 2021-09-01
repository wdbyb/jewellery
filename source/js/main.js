'use strict';

const header = document.querySelector('.header');
const menuToggler = document.querySelector('.header__menu');
const questionsTogglers = document.querySelectorAll('.questions__item button');
const filterTogglers = document.querySelectorAll('.catalog-filter__item button');
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
  },
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

function elementsListen(arr, activeClass) {
  arr.forEach((el) => {
    el.classList.remove(activeClass);

    el.addEventListener('click', function() {
      if (el.classList.contains(activeClass)) {
        el.classList.remove(activeClass);
      } else {
        el.classList.add(activeClass);
      }
    });
  });
}

header.classList.remove('header--menu-opened');

menuToggler.addEventListener('click', function() {
  if (header.classList.contains('header--menu-opened')) {
    header.classList.remove('header--menu-opened');
  } else {
    header.classList.add('header--menu-opened');
  }
});

elementsListen(questionsTogglers, 'active');
// elementsListen(filterTogglers, 'active');


