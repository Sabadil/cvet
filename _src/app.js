import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();

import './fonts.css';
import './reset.css';
import './app.scss';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {

    ymaps.ready(init);

    function init() {
    let myMap = new ymaps.Map("map", {
        center: [57.756357, 40.988941],
        zoom: 15,
        controls: ['typeSelector'],
        typeSelector: false,
    });

    let myPlacemark = new ymaps.Placemark(
        [57.756357, 40.988941], 
        {},
        {
          iconLayout: 'default#image',
          iconImageHref: 'assets/images/map-pin.svg',
          iconImageSize: [45, 45],
          iconImageOffset: [-16, -16]
        }
      );

    myMap.geoObjects.add(myPlacemark);
    }
    

    //SWIPERS //

    const swiperNews = new Swiper(".news__content--swiper", {
        slidesPerView: 3,
        spaceBetween: 20,
      });

})
