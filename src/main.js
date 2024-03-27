// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import simplelightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"

import { getPhotos } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';

const form = document.querySelector('.js-search-form');
const list = document.querySelector('.js-gallery');

form.addEventListener('submit', handleSubmit);




//SimpleLightBox========
// gallery.addEventListener("click", handleModalOpen);

// function handleModalOpen(event) {
 
//   if (event.target.nodeName === "IMG") {
//     event.preventDefault()
//     const instance = basicLightbox.create(`
//     <img src="${event.target.dataset.source}" alt="${event.target.alt}" /> 
// `);
//     instance.show();
//   }
// }