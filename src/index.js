import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/common.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImage } from './js/fetchImage';
import { renderGallery } from './js/renderGallery';

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
        fetchImage(input, page)
            .then(data => {
                renderGallery(data.hits, galleryRef);
            });
    }
}
