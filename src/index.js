import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImage } from './js/fetchImage';
// import { renderGallery } from './js/renderGallery';
import { optionsIntersection } from './js/optionIntersectionObserver';

const searchFormRef = document.querySelector('form');
const galleryRef = document.querySelector('.gallery');

let input;
let page = 1;

searchFormRef.addEventListener('submit', createQuery);

function createQuery(e) {
    e.preventDefault();
    input = e.currentTarget.searchQuery.value.trim();
    galleryRef.innerHTML = '';
    page = 1;

    if (input) {
        fetchImage(input, page, galleryRef, observer)
            // .then(data => {
            //     renderGallery(data.hits, galleryRef);
            //     observer.observe(sentinel);
            // });
    }
}

const observer = new IntersectionObserver(updateList, optionsIntersection);

function updateList(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        page += 1;
        observer.unobserve(galleryRef.lastElementChild);
      fetchImage(input, page, galleryRef, observer);
    }
  });
//   console.log(entries);
}