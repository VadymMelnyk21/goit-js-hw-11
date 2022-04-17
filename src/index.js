import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchImage } from './js/fetchImage';
import { renderGallery } from './js/renderGallery';
import { optionsIntersection } from './js/optionIntersectionObserver';

const searchFormRef = document.querySelector('form');
const galleryRef = document.querySelector('.gallery');
const observer = new IntersectionObserver(updateList, optionsIntersection);

let input;
let page = 1;

searchFormRef.addEventListener('submit', createQuery);

function createQuery(e) {
    e.preventDefault();
    input = e.currentTarget.searchQuery.value.trim();
    galleryRef.innerHTML = '';
    page = 1;

    if (input) {
        fetchImage(input, page, galleryRef)
            .then(data => {
                renderGallery(data.hits, galleryRef, observer);
            });
    }
}

function updateList(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        page += 1;
        observer.unobserve(galleryRef.lastElementChild);
        fetchImage(input, page, galleryRef)
            .then(data => {
                renderGallery(data.hits, galleryRef, observer);
            });;
    }
  });
//   console.log(entries);
}