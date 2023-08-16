import Swiper from '../../vendor/swiper.js';

export const initSwiper = () => {
  const swiperCards = new Swiper('.coach__slider', {
    loop: true,
    grabCursor: true,

    navigation: {
      nextEl: '.coach__button--next',
      prevEl: '.coach__button--prev',
    },

    mousewheel: false,
    keyboard: true,

    wrapperClass: 'swiper-wrapper',
    slideClass: 'swiper-slide',

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
        spaceBetween: 20,
      },

      1250: {
        slidesPerView: 4,
        spaceBetween: 30,
      },

      1360: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  const swiperReviews = new Swiper('.reviews__slider', {
    slidesPerView: 1,
    grabCursor: true,

    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },

    mousewheel: false,
    keyboard: true,

    wrapperClass: 'swiper-wrapper',
    slideClass: 'swiper-slide',

  });

  swiperCards.enable();
  swiperReviews.enable();
};
