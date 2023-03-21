'use strict';


//tabs=================================================================================================================
let tab = document.querySelector('.making__body');
let tabButtons = document.querySelector('.making__button');

let buttons = tabButtons.querySelectorAll('button');

for (let btn of buttons) {
   btn.addEventListener('click', function () {
      activeBtn(this);
      activeTab();
   })
}

function activeBtn(btn) {
   for (let button of buttons) {
      if (button.classList.contains('_btn-active')) {
         button.classList.remove('_btn-active');
      }
   }
   btn.classList.add('_btn-active');
}

function activeTab() {
   let texts = tab.querySelectorAll('p');
   let buttons = tabButtons.querySelectorAll('button');
   for (let btn of buttons) {
      if (btn.classList.contains('_btn-active')) {
         for (let p of texts) {
            if (p.dataset.tab == btn.dataset.tab) {
               p.classList.add('_text-active');
            } else {
               p.classList.remove('_text-active');
            }
         }
      }
   }
}

//swiper-slider=================================================================================================================
const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   slidesPerView: 1.78,
   spaceBetween: 75,
   speed: 100,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
   },

   // Navigation arrows
   navigation: {
      nextEl: '.slider-collection-next',
      prevEl: '.slider-collection-prev',
   },
});

//Выход за пределы container===========================================================================================
const Container = document.querySelector('.collection__container');
const Slider = document.querySelector('.collection__slider');


widthSlider();

window.addEventListener('resize', function () {
   widthSlider();
})

function widthSlider() {
   let distance = Container.getBoundingClientRect();

   let brauserInnerWidth = document.documentElement.clientWidth;

   let rightDistance = brauserInnerWidth - distance.right - 15;

   let widthSlider = distance.width + rightDistance;

   Slider.style.width = `${widthSlider}px`;
}