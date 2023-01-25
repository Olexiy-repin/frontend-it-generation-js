/*
<li class="gallery__item">
    <img src="{{this.urls.regular}}" alt="{{this.alt_description}}" class="gallery-img">
</li>
*/

export const createGalleryCards = cardsInfo => {
  const galleryCardArr = cardsInfo.map(el => {
    return `
    <li class="gallery__item">
        <img src="${el.urls.regular}" alt="${el.alt_description}" class="gallery-img">
    </li>
    `;
  });

  return galleryCardArr.join('');
};
