const randomColor = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

const paintingSectionsInRandomColor = () => {
  document.querySelectorAll('.section').forEach(section => {
    section.style.backgroundColor = randomColor();
  });
};

paintingSectionsInRandomColor();

const animateSectionEl = document.querySelector('.js-animated-section');

const onDocumentScroll = event => {
  console.log(window.pageYOffset);

  if (window.pageYOffset >= 800) {
    animateSectionEl.classList.add('active');

    document.removeEventListener('scroll', throttledOnDocumentScroll);
  }
};

const throttledOnDocumentScroll = _.throttle(onDocumentScroll, 300);

document.addEventListener('scroll', throttledOnDocumentScroll);
