import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  changesMenu();
  closeMenuLink();
  closeMenu();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// Открытие/закрытие меню

const navList = document.querySelector('.site-list');
const menuOverlay = document.querySelector('.main-header__menu-overlay');

document.querySelectorAll('.nojs').forEach((item) => item.classList.remove('nojs'));

const changesMenu = () => {
  const logoImg = document.querySelector('.main-header__logo');
  const navButton = document.querySelector('.navigation__button');

  navButton.addEventListener('click', function () {
    navButton.classList.toggle('is-active');
    navList.classList.toggle('is-active');
    logoImg.classList.toggle('is-active');
    document.body.classList.toggle('is-active');
    menuOverlay.classList.toggle('is-active');
  });
};

const closeMenu = () => {
  menuOverlay.addEventListener('click', () => {
    const activeItems = document.querySelectorAll('.is-active');
    activeItems.forEach((item) => {
      item.classList.remove('is-active');
    });
  });
};

const closeMenuLink = () => {
  const links = document.querySelectorAll('[data-link]');

  links.forEach((link) => {
    link.addEventListener('click', () => {
      const activeItems = document.querySelectorAll('.is-active');
      activeItems.forEach((item) => {
        item.classList.remove('is-active');
      });
    });
  });
};

// Move to block

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

// Валидация поля

const phoneInputs = document.querySelectorAll('input[data-tel]');

for (let i = 0; i < phoneInputs.length; i++) {
  let input = phoneInputs[i];
  input.addEventListener('input', () => {
    input.value = input.value.replace(/[^\d]/g, '');
  });
}

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
