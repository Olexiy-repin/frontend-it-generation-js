/*
 * Основи подій. Створення та видалення слухачів. Об'єкт події
 */

/*
 ?  - Найменування колбеків для слухачів
 ?  - handle*: handleSubjectEvent
 ?  - *Handler: subjectEventHandler
 ?  - on*: onSubjectEvent
 */

// https://picsum.photos/200/300

const imgEl = document.querySelector('.js-img');
const swapBtnEl = document.querySelector('.js-swap-btn');
const removeEventBtnEl = document.querySelector('.js-remove-listener');

const onSwapBtnElClick = event => {
  console.log(event);

  imgEl.src = 'https://picsum.photos/200/300';
  imgEl.alt = 'random image';
};

swapBtnEl.addEventListener('click', onSwapBtnElClick);

removeEventBtnEl.addEventListener('click', () => {
  swapBtnEl.removeEventListener('click', onSwapBtnElClick);
});
