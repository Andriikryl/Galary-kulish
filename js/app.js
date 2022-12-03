
const burger = document?.querySelector('[data-burger]');

const nav = document?.querySelector('[data-nav]');
const body = document.body;

burger?.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    burger?.classList.toggle('burger--active');
    nav.classList.toggle('nav--visible');
})







// $(document).ready(function(){

//   $('.owl-carousel').owlCarousel({
//       autoplay: true,
//       autoplaySpeed: 6000,
//       loop:true,
//       margin:0,
//       nav:true,
//       navText: [ '', ' ' ],

//       responsive:{
//           0:{
//               items:2,
//           },
//           600:{
//               items:3,
//           },
//           800:{
//               items:4,
//           },
//           1000:{
//               items:4
//           }
//       }
//   });
// });

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  loopedSlides:3,
  slidesPerView: 'auto',
  autoHeight:true,
  spaceBetween: 30,
  slidesPerGroup:1,
  centeredSlides: true,
  freeMode: true,

  autoplay: {
    delay: 1000,
    stopOnLastSlide: true,
    disableOnInteraction: false,
  },

  speed: 900,

  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});