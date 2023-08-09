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
      1320: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1250: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1150: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 70,
      },
      768: {
        grabCursor: true,
        slidesPerView: 2,
        spaceBetween: 30,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      680: {
        slidesPerView: 2,
        spaceBetween: 80,
      },
      541: {
        spaceBetween: 30,
      },
      520: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      500: {
        spaceBetween: 10,
      },
      499: {
        slidesPerView: 1,
        spaceBetween: 100,
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
