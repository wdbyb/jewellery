'use strict';

const header = document.querySelector('.header');
const menuToggler = document.querySelector('.header__menu');
const questionsTogglers = document.querySelectorAll('.questions__item button');
const filterTogglers = document.querySelectorAll('.catalog-filter__item button');
const filterToggler = document.querySelector('.catalog-filter__open-filter');
const filterClose = document.querySelector('.catalog-filter__btn-close');
const loginBtn = document.querySelector('.header__user-item--login a');
const popup = document.querySelector('.login');
const popupEmail = popup.querySelector('#login-email');
const popupClose = popup.querySelector('.login__btn-close');
const loginForm = popup.querySelector('#login-form');
const emailInput = loginForm.querySelector('#login-email');
const loopers = popup.querySelectorAll('.login__looper');
const body = document.querySelector('body');
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

if (filterToggler) {
  filterToggler.classList.remove('opened');

  filterToggler.addEventListener('click', function() {
    if (filterToggler.classList.contains('opened')) {
      filterToggler.classList.remove('opened');
    } else {
      filterToggler.classList.add('opened');
    }
  });

  filterClose.addEventListener('click', function() {
    filterToggler.classList.remove('opened');
  });
}

menuToggler.addEventListener('click', function() {
  if (header.classList.contains('header--menu-opened')) {
    header.classList.remove('header--menu-opened');
  } else {
    header.classList.add('header--menu-opened');
  }
});

loginBtn.addEventListener('click', function(evt) {
  evt.preventDefault();

  loopers.forEach((item) => {
    item.addEventListener('focus', () => {
      popupEmail.focus();
    });
  });

  popup.classList.remove('hide');
  body.style.overflow = 'hidden';
  popupEmail.focus();

  popupClose.addEventListener('click', function() {
    popup.classList.add('hide');
    body.style.overflow = 'scroll';
  });

  document.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('login')) {
      popup.classList.add('hide');
      body.style.overflow = 'scroll';
    }
  });

  document.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape') {
      popup.classList.add('hide');
      body.style.overflow = 'scroll';
    }
  });
});

loginForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  localStorage.setItem('email', emailInput.value);

  loginForm.reset();
});

elementsListen(questionsTogglers, 'active');
elementsListen(filterTogglers, 'active');
