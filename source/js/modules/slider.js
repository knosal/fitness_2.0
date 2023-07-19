import Swiper, {Navigation} from 'swiper';

const swiperCards = new Swiper('.coach__slider', {
  modules: [Navigation],
  loop: true,
  grabCursor: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    767: {
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

export default {swiperCards};
