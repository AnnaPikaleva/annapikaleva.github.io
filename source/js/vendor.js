// Swiper 7.4.1
import './vendor/swiper.js';

export const moveCoachesSlider = () => new window.Swiper('.slider', {

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

export const reviewCarousel = () => new window.Swiper('.carousel', {
  direction: 'horizontal',
  loop: false,

  navigation: {
    nextEl: '.swiper-button--carousel-next',
    prevEl: '.swiper-button--carousel-prev',
  },
});
