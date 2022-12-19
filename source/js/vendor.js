// Swiper 7.4.1
import './vendor/swiper.js';
// import './vendor/focus-visible-polyfill';

const coachesSlider = () => {
  const swiper = new Swiper('.slider', {
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
};

const reviewCarousel = () => {
  const swiper = new Swiper('.carousel', {
    direction: 'horizontal',
    loop: false,

    navigation: {
      nextEl: '.swiper-button--carousel-next',
      prevEl: '.swiper-button--carousel-prev',
    },
  });
};

export {coachesSlider, reviewCarousel};
