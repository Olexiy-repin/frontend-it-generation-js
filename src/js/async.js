/*
 * Синхронний vs Асинхронний JS
 */

// console.log('First');

// console.log('Second');

// console.log('Third');

// document.addEventListener('scroll', event => {
//   console.log('Hello!');
// });

// Стек виклику функцій (http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!)

// Функції відкладеного виклику window.setTimeout(callback, delay, arg1, arg2, ...);

// console.log('First');

// setTimeout(() => {
//   console.log('Hello from setTimeout!');
// }, 1000);

// console.log('Second');

// const intervalId = setInterval(() => {
//   console.log('Hello!');
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);

// Очищення інтервалів та таймутів clearInterval(intervalID), clearTimeout(timeoutID)
