import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// //import Swiper, { Navigation, Pagination } from 'swiper';


new Swiper('.agency-slider', {
    // Optional parameters
    // direction: 'horizontal',
   loop: true,
   
 
  
    // Navigation arrows
    navigation: {
      enabled: true,
      //disabledClass: 'swiper-button-disabled',
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      
     },

     // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },  
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',

      
    },
  });


let comments = new Swiper('.comments__slider', {
  // Optional parameters
  // direction: 'horizontal',
 loop: true,
 slidesPerView: 1,
 //spaceBetween: -260,
 //slidesPerGroup: 1,
 effect: 'fade',
 fadeEffect: {
   crossFade: true
 },

  // Navigation arrows
  navigation: {
    enabled: true,
    //disabledClass: 'swiper-button-disabled',
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    
   },

   // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    
  },  

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',

    
  },
});

let commentators = new Swiper('.commentators-slider', {
  // Optional parameters
  // direction: 'horizontal',
 loop: true,
 slidesPerView: 1,
 //spaceBetween: 10,
//  

//slidesPerGroup: 1,
//  zoom: {
//   maxRatio: 5,
// },
//spaceBetween: 1,


  // Navigation arrows
  navigation: {
    enabled: true,
    //disabledClass: 'swiper-button-disabled',
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    
   },

   // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },  

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',

    
  },
//   breakpoints: {
//       320: {
//         slidesPerView: 1,
//         spaceBetween: -50,
//        },
//       // 400: {
//       //   slidesPerView: 2,
//       // },
//       440: {
//         slidesPerView: 3,
//         spaceBetween: -50,
//       },
//       480: {
//         slidesPerView: 4,
//         spaceBetween: -50,
//       },
//     }
 });

commentators.controller.control = comments;
comments.controller.control = commentators;

