import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 300,
});

export function renderImages(images, isFirstPage) {
    const galleryElement = document.querySelector('.js-gallery-list');
    
    if (isFirstPage) {
        galleryElement.innerHTML = '';
    }

    if (images.length === 0 && isFirstPage) {
        iziToast.error({
            message: 'Sorry, there are no images matching your search. Please try again!',
        });
        return;
    }
    
    const galleryHtml = images
        .map(img => {
            return `
                <li class="gallery-item">
                    <a class="gallery-link" href="${img.largeImageURL}">
                        <img src="${img.webformatURL}" alt="${img.tags}">
                    </a>
                    <ul class="item-info">
                        <li class="item-list"><h3>Likes</h3><p>${img.likes}</p></li>
                        <li class="item-list"><h3>Views</h3><p>${img.views}</p></li>
                        <li class="item-list"><h3>Comments</h3><p>${img.comments}</p></li>
                        <li class="item-list"><h3>Downloads</h3><p>${img.downloads}</p></li>
                    </ul>
                </li>
            `;
        })
        .join('');

    galleryElement.insertAdjacentHTML('beforeend', galleryHtml);

    gallery.refresh();
}









