import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {readMore} from './modules/openblock.js';
import {moveToForm} from './modules/app.js';
import {openList} from './modules/accordion.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  document.getElementById('toggler').addEventListener('click', () => {
    readMore();
  });
  moveToForm();
  openList();
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// Focus

document.querySelector('.main-header__button-link').addEventListener('click', function () {
  setTimeout(() => {
    document.querySelector('#customer-name').focus();
  }, 100);
});

// Validate form

const reg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

const form = document.querySelector('[data-form]');
const phone = document.querySelector('[data-tel]');

const generateError = function (text) {
  let error = document.createElement('span');
  error.className = 'feedback-form__error';
  error.style.color = 'brown';
  error.innerHTML = text;
  return error;
};

const removeValidation = function () {
  let errors = document.querySelectorAll('.error');
  for (let j = 0; j < errors.length; j++) {
    errors[j].remove();
  }
};

const checkPhoneMatch = function () {
  if (!reg.test(phone.value)) {
    let error = generateError('Формат +7 (000) 000-00-00');
    phone.parentElement.insertBefore(error, phone);
    return false;
  } else {
    return true;
  }
};

form.addEventListener('submit', function (event) {
  event.preventDefault();
  removeValidation();
  const valid = checkPhoneMatch();
  if (valid) {
    form.submit();
  }
});

// Маска для телефона

const phoneInputs = document.querySelectorAll('input[data-tel]');

const prefixNumber = (str) => {
  if (str === '7') {
    return '7 (';
  }
  if (str === '8') {
    return '7 (';
  }
  if (str === '9') {
    return '7 (9';
  }
  return '7 (';
};

function validation(inputValid) {
  inputValid.addEventListener('input', () => {
    const value = inputValid.value.replace(/\D+/g, '');
    const numberLength = 11;

    let result;
    if (inputValid.value.includes('+8') || inputValid.value[0] === '8') {
      result = '+';
    } else {
      result = '+';
    }

    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 0:
          result += prefixNumber(value[i]);
          continue;
        case 4:
          result += ') ';
          break;
        case 7:
          result += '-';
          break;
        case 9:
          result += '-';
          break;
        default:
          break;
      }
      result += value[i];
    }
    inputValid.value = result;
  });
}

phoneInputs.forEach((phoneInput) => validation(phoneInput));

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

// const buttonToForm = document.querySelector('.main-page__container > a');
// // console.log(buttonToForm);
// const form = document.querySelector('form');
// // console.log(form);

// buttonToForm.addEventListener('click', () => {
//   form.scrollIntoView({
//     block: 'nearest',
//     behavior: 'smooth',
//   });
// });
