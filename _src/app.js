import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();

import './fonts.css';
import './reset.css';
import './app.scss';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'micromodal';

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
        breakpoints: {
          // mobile + tablet - 320-990
          320: {
            slidesPerView: 1.2
          },
          // desktop >= 991
          768: {
            slidesPerView: 1.7
          },
          991: {
            slidesPerView: 3
          }
        }
      });

      const swiperEquip = new Swiper(".equip-swiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      const swiperServices = new Swiper(".services-swiper", {
        slidesPerView: 1.1,
        spaceBetween: 20,
      });

      const swiperCompanyWork = new Swiper(".company-work", {
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next-company",
          prevEl: ".swiper-button-prev-company",
        },
      });

      const swiperDetail = new Swiper(".detail-swiper", {
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next-detail",
          prevEl: ".swiper-button-prev-detail",
        },
      });


      //micromodal

      MicroModal.init({
        openTrigger: 'data-custom-open', // [3]
        closeTrigger: 'data-custom-close', // [4]
        openClass: 'is-open', // [5]
        disableScroll: true, // [6]
        disableFocus: false, // [7]
        awaitOpenAnimation: false, // [8]
        awaitCloseAnimation: false, // [9]
        debugMode: true // [10]
      });

})
