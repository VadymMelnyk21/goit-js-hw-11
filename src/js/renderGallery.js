import renderCard from '../templates'
console.log(renderCard);
export function renderGallery(images) {
  const markupGallery = images
    .map(image => {
      const markup = 0;
      return markup;
    })
    .join('');
  galleryRef.insertAdjacentHTML('beforeend', markupGallery);
}