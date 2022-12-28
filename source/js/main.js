import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {moveCoachesSlider, swipeCarousel} from './vendor.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    moveCoachesSlider();
    swipeCarousel();
    findVideos();
    moveToBlock();
    handleChange(mediaQuery);
    handleChangeDesktop(mediaQueryDesktop);
  });
});

document.querySelectorAll('.nojs').forEach((item) => item.classList.remove('nojs'));

// Move to block

const moveToBlock = () => {
  const button = document.querySelector('.intro__wrapper > a');
  const block = document.querySelector('.membership');

  button.addEventListener('click', function (event) {
    event.preventDefault();
    block.scrollIntoView({
      block: 'nearest',
      behavior: 'smooth',
    });
  });
};

// Tabs

const triggers = document.querySelectorAll('.tabs__item');
const tabsItems = document.querySelectorAll('.cards');

triggers.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener('click', function (event) {
    event.preventDefault();
    let currentTrigger = item;
    let tabId = currentTrigger.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    if (!currentTrigger.classList.contains('tabs__item--active')) {
      triggers.forEach((child) => child.classList.remove('tabs__item--active'));
      tabsItems.forEach((child) => child.classList.remove('cards--active'));

      currentTrigger.classList.add('tabs__item--active');
      currentTab.classList.add('cards--active');
    }
  });
}

document.querySelector('.tabs__item').click();

// Video

function findVideos() {
  const videos = document.querySelectorAll('.video');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector('.video__link');
  let button = video.querySelector('.video__button');
  let id = parseMediaURL();

  video.addEventListener('click', () => {
    let iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
}

function parseMediaURL() {
  let regexp = /https:\/\/(?:youtu\.be\/|(?:[a-z]{2,3}\.)?youtube\.com\/watch(?:\?|#\!)v=)([\w-]{11}).*/gi;
  let match = regexp.exec(document.querySelector('.video__link').href)[1];

  return match;
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');

  return iframe;
}

function generateURL(id) {
  let query = '?autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

// Validate

const phoneInputs = document.querySelectorAll('input[data-tel]');

for (let i = 0; i < phoneInputs.length; i++) {
  let input = phoneInputs[i];
  input.addEventListener('input', () => {
    input.value = input.value.replace(/[^\d]/g, '');
  });
}

// Click on slider card

const mediaQuery = window.matchMedia('(max-width: 1199px)');
const mediaQueryDesktop = window.matchMedia('(min-width: 1200px)');

function handleChangeDesktop(element) {
  if (element.matches) {
    const sliderCardsd = document.querySelectorAll('.slider__item');
    sliderCardsd.forEach((card) => {
      card.classList.add('slider__item--hover');
      const subitemCard = card.querySelector('.slider__subitem');
      subitemCard.classList.remove('slider__subitem--active');
    });
  }
}

function handleChange(element) {
  if (element.matches) {
    const sliderCards = document.querySelectorAll('.slider__item');
    sliderCards.forEach((card) => {
      card.classList.remove('slider__item--hover');
      card.addEventListener('click', () => {
        const subitemCard = card.querySelector('.slider__subitem');
        subitemCard.classList.toggle('slider__subitem--active');
        card.classList.toggle('slider__item--active');
      });
    });
  }
}

mediaQuery.addEventListener('change', handleChange);
mediaQueryDesktop.addEventListener('change', handleChangeDesktop);

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
