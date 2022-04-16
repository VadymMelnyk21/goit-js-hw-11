import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/common.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchFormRef = document.querySelector('form');
const galleryRef = document.querySelector('.gallery');

let input;
let page = 1;

searchFormRef.addEventListener('submit', createQuery);

function createQuery(e) {
    e.preventDefault();
    input = e.currentTarget.searchQuery.value.trim();
    galleryRef.innerHTML = '';

    // if (input) {
    //     fetchImage(input, page);
    // }
    console.log(input);
}