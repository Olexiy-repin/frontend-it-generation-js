/*
 * Колбек-функції, функції вищого порядку
 */

// const greet = function (callback) {
//   const userName = prompt('Ваше імʼя?');

//   callback(userName);
// };

// const simpleGreet = function (firstName) {
//   console.log(`Hello ${firstName}`);
// };

// const prettyGreet = function (firstName) {
//   console.log(`Welcome ${firstName}! 🙋‍♂️`);
// };

// greet(simpleGreet);
// greet(prettyGreet);

//? Реєстрація подій на сторінці
// const userEmailEl = document.querySelector('.js-contact-form-email');

// const logValues = function () {
//   console.log('Hello!');
// };

// userEmailEl.addEventListener('input', logValues);

/*
? Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву.
? Функція each повинна повернути новий масив, елементами якого будуть результати виклику колббека.
*/

// const numbers = [1, 2, 3, 4, 5];

// const each = function (array, callback) {
//   const newArray = [];

//   for (const item of array) {
//     newArray.push(callback(item));
//   }

//   return newArray;
// };

// const multi = function (el) {
//   return el * 2;
// };

// const doubleAdd = function (el) {
//   return el + 2;
// };

// console.log(numbers);
// console.log(each(numbers, multi));
// console.log(each(numbers, doubleAdd));
