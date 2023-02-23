// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');

const genGalleryItem = galleryItems.map((item) => {
  return (
`<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`)
}).join('')
gallery.insertAdjacentHTML('beforeend', genGalleryItem);


new SimpleLightbox('.gallery a', {
    captionType: 'attr',
    captionsData:  'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    // scrollZoom: false,
})
console.log(galleryItems);
