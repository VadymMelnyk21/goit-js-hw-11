import renderCard from '../templates/renderCard.hbs'

export function renderGallery(images, galleryRef) {
  const markupGallery = renderCard(images);
  galleryRef.insertAdjacentHTML('beforeend', markupGallery);
}