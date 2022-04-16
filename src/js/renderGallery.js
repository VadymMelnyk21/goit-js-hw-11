import renderCard from '../templates/renderCard.hbs'
// console.log(renderCard);
export function renderGallery(images, galleryRef) {
  const markupGallery = images
    .map(renderCard
    )
    .join('');
  galleryRef.insertAdjacentHTML('beforeend', markupGallery);
}