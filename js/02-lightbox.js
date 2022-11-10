import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li>
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>  
      `;
    })
    .join('');
}
    let gallery = new SimpleLightbox('a.gallery__item', {
        captionsData: 'alt',
        captionDelay: 250,
        captionPosition: 'bottom',
    });