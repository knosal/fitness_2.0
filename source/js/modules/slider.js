import Swiper, {Navigation} from '../vendor/swiper';

const swiperCards = new Swiper('.coach__slider', {
  modules: [Navigation],
  loop: true,
  grabCursor: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      grabCursor: true,
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      allowTouchMove: false,
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: '.coach__button-next',
    prevEl: '.coach__button-prev',
  },

});

const swiperReviews = new Swiper('.reviews__slider', {
  modules: [Navigation],
  slidesPerView: 1,
  grabCursor: true,
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },

});

export default {swiperCards, swiperReviews};
