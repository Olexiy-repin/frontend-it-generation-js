const messagesWrapperEl = document.querySelector('.js-messages-wrapper');

const onCloseMessageBtnElClick = event => {
  const { target } = event;

  if (target.nodeName !== 'BUTTON') {
    return;
  }

  const messageEl = target.closest('.js-message');

  messageEl.remove();
};

messagesWrapperEl.addEventListener('click', onCloseMessageBtnElClick);
