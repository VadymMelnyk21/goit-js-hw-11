import renderCard from '../templates/renderCard.hbs'
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function renderGallery(images, galleryRef, observer) {
  const markupGallery = renderCard(images);
  galleryRef.insertAdjacentHTML('beforeend', markupGallery);
  observer.observe(galleryRef.lastElementChild);
  const lightbox = new SimpleLightbox('.gallery a');
}