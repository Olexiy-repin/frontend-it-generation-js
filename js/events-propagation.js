/*
 * Поширення подій (занурення, таргетинг, спливання)
 */

const sectionEl = document.querySelector('.js-section');
const divEl = document.querySelector('.js-div');
const textEl = document.querySelector('.js-text');

sectionEl.addEventListener('click', event => {
  console.group('Click in Section');
  console.log('Event.target --->', event.target);
  console.log('Event.currentTarget --->', event.currentTarget);
  console.groupEnd();
});

divEl.addEventListener('click', event => {
  console.group('Click in Div');
  console.log('Event.target --->', event.target);
  console.log('Event.currentTarget --->', event.currentTarget);
  console.groupEnd();
});

textEl.addEventListener('click', event => {
  console.group('Click in P');
  console.log('Event.target --->', event.target);
  console.log('Event.currentTarget --->', event.currentTarget);
  console.groupEnd();
});
