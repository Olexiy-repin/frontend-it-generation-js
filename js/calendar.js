const calendarBodyEl = document.querySelector('.js-calendar-body');
let prevCalendarItemEl = null;

const onCalendarItemElClick = event => {
  const { target } = event;

  // Якщо це порожня комірка, то нічого робити не потрібно
  if (target.textContent === '') {
    return;
  }

  // Якщо це та сама комірка, то переключаємо клас active і виходимо
  if (target === prevCalendarItemEl) {
    target.classList.toggle('active');

    return;
  }

  // Якщо це не перший клік, то прибираємо клас active з попередньої комірки
  if (prevCalendarItemEl !== null) {
    prevCalendarItemEl.classList.remove('active');
  }

  target.classList.add('active');
  prevCalendarItemEl = target;
};

calendarBodyEl.addEventListener('click', onCalendarItemElClick);
