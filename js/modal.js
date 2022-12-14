const openModalBtnEl = document.querySelector('.js-modal-open');
const backdropEl = document.querySelector('.js-backdrop');
const closeModalBtnEl = document.querySelector('.js-modal-close');

const onOpenModalBtnElClick = event => {
  backdropEl.classList.add('is-open');

  document.addEventListener('keydown', onEscapeKeyDown);
};

const closeModalWindow = event => {
  backdropEl.classList.remove('is-open');

  document.removeEventListener('keydown', onEscapeKeyDown);
};

const onEscapeKeyDown = event => {
  if (event.code === 'Escape') {
    closeModalWindow();
  }
};

openModalBtnEl.addEventListener('click', onOpenModalBtnElClick);
closeModalBtnEl.addEventListener('click', closeModalWindow);
