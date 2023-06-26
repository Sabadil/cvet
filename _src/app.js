import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();

import './fonts.css';
import './reset.css';
import './app.scss';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {

    

    //SWIPERS //

    const swiperMain = new Swiper(".main-swiper", {
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".main-swiper-button-next",
        prevEl: ".main-swiper-button-prev",
      },
    });

    const swiperNews = new Swiper(".news__content--swiper", {
        slidesPerView: 3,
        spaceBetween: 20,
      });

})
