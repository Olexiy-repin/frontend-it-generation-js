// Створення нової дати

// const date = new Date();

// console.dir(date);

// console.log(date.getFullYear());

// date.setMinutes(20);

// console.dir(date);

//? TASK 01
// Створіть функцію getWeekDay(date), яка показує день тижня у короткому форматі:
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «НД».

// const getWeekDay = date => {
//   const daysArr = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//   const idxOfDay = date.getDay();

//   return daysArr[idxOfDay];
// };

// const date = new Date(2023, 0, 11);

// console.log(date);

// console.log(getWeekDay(date));

//? TASK 02
// Створіть функуію getLastDayOfMonth(year, month), яка повертає останнє число місяця. Інколи це 30, 31 або навіть 28/29 у лютому.
// Параметри:
// year – рік з чотирьох цифр, наприклад, 2012.
// month – місяць від 0 до 11.
// Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий).

// const getLastDayOfMonth = (year, month) => {
//   const date = new Date(year, month + 1, 0);

//   return date.getDate();
// };

// console.log(getLastDayOfMonth(2012, 1));

//? TASK 03
// Створіть функцію getSecondsToTomorrow(), яка повертає кількість секунд до завтрашнього дня.

// const getSecondsToTomorrow = () => {
//   const dateNow = new Date();
//   const dateTomorrow = new Date(
//     dateNow.getFullYear(),
//     dateNow.getMonth(),
//     dateNow.getDate() + 1
//   );

//   const diff = dateTomorrow - dateNow;

//   return diff / 1000;
// };

// console.log(getSecondsToTomorrow());
