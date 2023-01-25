/*
 * async/await
 * асинхрона(async) функція ЗАВЖДИ повертає проміс.
 * await змушує функцію чекати виконання проміса.
 * await не працює поза асинхроними функціями.
 */

// const fn = async () => {
//   const promise = await Promise.resolve('Hello');

//   console.log(promise);
// };

// fn();

// const BASE_URL = 'https://jsonplaceholder.typicode.com';

// const fetchPosts = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/posts`);

//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

// fetchPosts()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? TASK 01
// Є «звичайна» функція. Як можна всередині неї отримати результат виконання async-функції?
// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {
//   wait().then(result => {
//     console.log(result);
//   });

//   // ...що тут написати?
//   // щоб викликати wait() і дочекатися результату "10" від async-функції
//   // не забувайте, тут не можна використовувати "await"
// }

// f();
