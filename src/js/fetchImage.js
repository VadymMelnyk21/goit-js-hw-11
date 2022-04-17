import axios from 'axios';
import { renderGallery } from './renderGallery';

const key = '26782517-d7749598e3fd4393206db4041';
axios.defaults.baseURL = 'https://pixabay.com/api'

export async function fetchImage(name, page, galleryRef, observer) {
    const { data } = await axios.get(`/`,
        {
            params: {
                key: `${key}`,
                q: `${name}`,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: 'true',
                page: `${page}`,
                per_page: '40',
            }
        });
    const cards = await renderGallery(data.hits, galleryRef, observer);
               
    return cards;
}