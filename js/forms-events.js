/*
 * Події елементів форм. focus, blur, change, input, submit
 */

const usernameInputEl = document.querySelector('.js-username-input');
const usernameOutputEl = document.querySelector('.js-username-output');
const checkboxEl = document.querySelector('.js-policy-checkbox');
const submitBtnEl = document.querySelector('.js-contact-form-submit');
const contactFormEl = document.querySelector('.js-contact-form');

usernameInputEl.addEventListener('focus', () => {
  console.log('Focus Event');

  usernameInputEl.style.outlineColor = 'teal';
});

usernameInputEl.addEventListener('blur', () => {
  console.log('Blur Event');
});

usernameInputEl.addEventListener('input', () => {
  console.log('Input Event');

  usernameOutputEl.textContent = usernameInputEl.value;
});

usernameInputEl.addEventListener('change', () => {
  console.log('Change Event');
});

checkboxEl.addEventListener('change', () => {
  console.log('Change Event on checkbox');

  if (checkboxEl.checked && usernameInputEl.value !== '') {
    submitBtnEl.removeAttribute('disabled');
  } else {
    submitBtnEl.disabled = true;
  }
});

contactFormEl.addEventListener('submit', event => {
  event.preventDefault();

  console.log('Submit Event');

  console.log(event);
});
