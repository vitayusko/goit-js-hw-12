import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { renderImages } from "./js/render-functions";
import { getPhotos } from "./js/pixabay-api";

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');
const loader = document.getElementById('loader');
const galleryElement = document.querySelector('.js-gallery-list');
const buttonmore = document.querySelector('.js-load-more');

buttonmore.classList.add('is-hiden');

let page = 1;
let query = '';

const handleClick = () => {
  page += 1;
  getImages(page);
};

buttonmore.addEventListener('click', handleClick);

form.addEventListener('submit', async event => {
  event.preventDefault();

  query = input.value.trim();
  if (query === '') {
    iziToast.error({
      title: 'Error:',
      message: 'Please enter a search term.',
      position: 'topRight',
    });
    return;
  }

  galleryElement.innerHTML = '';
  page = 1;
  getImages(page);
  form.reset();
});

const getImages = async page => {
  try {
    loader.style.display = 'block';
    buttonmore.classList.add('is-hiden');
    const response = await getPhotos(query, page);
    const images = response.data.hits;

    await renderImages(images);
    if (page > 1) {
      galleryScroll();
    }
    if (response.data.totalHits <= page * 15) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
      return;
    }
    buttonmore.classList.remove('is-hiden');
  } catch (error) {
    iziToast.error({
      title: 'Error:',
      message: 'An error occurred while fetching images. Please try again later.',
    });
  } finally {
    loader.style.display = 'none';
  }
};

const galleryScroll = () => {
  const galleryItem = document.querySelector('.gallery-item');
  if (galleryItem) {
    const rect = galleryItem.getBoundingClientRect();
    const scrollValue = rect.height * 2;
    window.scrollBy({
      top: scrollValue,
      left: 0,
      behavior: 'smooth',
    });
  }
};
