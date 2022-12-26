// Swiper 7.4.1
import './vendor/swiper.js';

function deleteTabindex() {
  const dublicateItems = document.querySelectorAll('.swiper-slide-duplicate');

  dublicateItems.forEach((item) => {
    item.removeAttribute('tabindex');
  });
}

const swiperCoaches = () => new window.Swiper('.slider', {

  direction: 'horizontal',
  loop: true,
  allowTouchMove: true,
  slidesPerGroup: 1,
  autoHeight: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

export const moveCoachesSlider = () => {
  swiperCoaches();
  deleteTabindex();
};

export const swipeCarousel = () => new window.Swiper('.carousel', {
  direction: 'horizontal',
  loop: false,
  autoHeight: true,

  navigation: {
    nextEl: '.swiper-button--carousel-next',
    prevEl: '.swiper-button--carousel-prev',
  },
});
