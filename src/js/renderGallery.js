import renderCard from '../templates/renderCard.hbs'

export function renderGallery(images, galleryRef, observer) {
  const markupGallery = renderCard(images);
  galleryRef.insertAdjacentHTML('beforeend', markupGallery);
  observer.observe(galleryRef.lastElementChild);
}