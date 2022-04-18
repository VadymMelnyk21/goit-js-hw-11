import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchImage } from './js/fetchImage';
import { renderGallery } from './js/renderGallery';
import { optionsIntersection } from './js/optionIntersectionObserver';
import { scroll } from './js/scroll';

const searchFormRef = document.querySelector('form');
const galleryRef = document.querySelector('.gallery');
const observer = new IntersectionObserver(updateList, optionsIntersection);

let input;
let page = 1;
let perPage = 0;

searchFormRef.addEventListener('submit', createQuery);

async function createQuery(e) {
    e.preventDefault();
    input = e.currentTarget.searchQuery.value.trim();
    galleryRef.innerHTML = '';
    page = 1;
    
    if (input) {
        const data = await fetchImage(input, page, galleryRef);
        perPage = data.hits.length;

            try {

            if (data.totalHits === 0) {
                Notify.failure("Sorry, there are no images matching your search query. Please try again.");
            }

            if (data.totalHits > 0) {
                Notify.info(`Hooray! We found ${data.totalHits} images`);
                renderGallery(data.hits, galleryRef, observer);
            }
        } catch (error) {
            console.log(error);
        }
    }
}

function updateList(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {     
        loadMore()
    }
  });
}

async function loadMore() {
    page += 1;
    observer.unobserve(galleryRef.lastElementChild);
    Notify.success(`Page ${page}`);

    const data = await fetchImage(input, page, galleryRef)
    perPage += data.hits.length;
    
    renderGallery(data.hits, galleryRef, observer);
    scroll();
    try {     
        if (data.totalHits <= perPage) {
            observer.unobserve(galleryRef.lastElementChild);
            Notify.failure("We're sorry, but you've reached the end of search results.");
        }
    } catch (error) {
        console.log(error);
    } 
}
