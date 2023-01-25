// https://unsplash.com/
import { UnsplashAPI } from './unsplash-api.js';
import { createGalleryCards } from './templates/gallery-cards.js';

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const unsplashApi = new UnsplashAPI();

const appendRandomPhotos = async () => {
  try {
    const response = await unsplashApi.fetchRandomPhotos();

    const { data } = response;

    galleryListEl.innerHTML = createGalleryCards(data);
  } catch (err) {
    console.log(err);
  }
};

appendRandomPhotos();

const onSearchFormSubmit = async event => {
  event.preventDefault();

  unsplashApi.query = event.target.elements.user_search_query.value.trim();
  unsplashApi.page = 1;

  try {
    const response = await unsplashApi.fetchPhotosByQuery();

    const { data } = response;

    if (data.results.length === 0) {
      alert('За вашим запитом зображень не знайдено!');

      event.target.reset();

      galleryListEl.innerHTML = '';

      loadMoreBtnEl.classList.add('is-hidden');

      return;
    }

    if (data.total_pages > 1) {
      loadMoreBtnEl.classList.remove('is-hidden');
    }

    galleryListEl.innerHTML = createGalleryCards(data.results);
  } catch (err) {
    console.log(err);
  }
};

const onLoadMoreBtnClick = async event => {
  unsplashApi.page += 1;

  try {
    const response = await unsplashApi.fetchPhotosByQuery();

    const { data } = response;

    galleryListEl.insertAdjacentHTML(
      'beforeend',
      createGalleryCards(data.results)
    );

    if (unsplashApi.page === data.total_pages) {
      loadMoreBtnEl.classList.add('is-hidden');
    }
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
