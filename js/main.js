/*
 * Операція spread замість concat і slice
 */

//* Копія масива
// Через метод slice
// const numbers = [1, 2, 3, 4, 5];
// const numbersCopy = numbers.slice();

// console.log('numbers: ', numbers);
// console.log('numbersCopy: ', numbersCopy);

// numbers.push(10);

// console.log('numbers: ', numbers);
// console.log('numbersCopy: ', numbersCopy);

// Через метод concat
// const numbers = [1, 2, 3, 4, 5];
// const numbersCopy = numbers.concat();

// console.log('numbers: ', numbers);
// console.log('numbersCopy: ', numbersCopy);

// numbers.push(10);

// console.log('numbers: ', numbers);
// console.log('numbersCopy: ', numbersCopy);

// Через оператор spread
// const numbers = [1, 2, 3, 4, 5];
// const numbersCopy = [...numbers];

// console.log('numbers: ', numbers);
// console.log('numbersCopy: ', numbersCopy);

// numbers.push(10);

// console.log('numbers: ', numbers);
// console.log('numbersCopy: ', numbersCopy);

//* Об'єднання масивів
// const firstArr = [1, 2, 3];
// const secondArr = [10, 11, 12];
// const allArr = [50, ...firstArr, 20, 30, ...secondArr, 100];

// console.log('firstArr: ', firstArr);
// console.log('secondArr: ', secondArr);
// console.log('allArr: ', allArr);

//* Розпилення масиву у функцію
// const numbers = [1, 2, 3, 4, 6, 7, 8];
// const min = Math.min(...numbers);

// console.log(min);

/*
 * Операція spread замість Object.assign({}, obj)
 */
// Через метод assign
// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };
// const userCopy = Object.assign({}, user);

// console.log('user: ', user);
// console.log('userCopy: ', userCopy);

// user.age = 40;

// console.log('user: ', user);
// console.log('userCopy: ', userCopy);

// Через оператор spread
// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };
// const userCopy = {
//   id: 10,
//   age: 50,
//   ...user,
// };

// console.log('user: ', user);
// console.log('userCopy: ', userCopy);

// user.age = 40;

// console.log('user: ', user);
// console.log('userCopy: ', userCopy);

//* Розпилення складних типів
// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
//   someArr: [1, 2, 3, 4],
// };
// const userCopy = _.cloneDeep(user);

// console.log('user: ', user);
// console.log('userCopy: ', userCopy);

// user.someArr.push(10);

// console.log('user: ', user);
// console.log('userCopy: ', userCopy);

/*
 * Операція rest
 */
//? Напишіть функцію sum, яка складає довільну кількість аргументів
// Через arguments
// const sum = function () {
//   let total = 0;

//   for (const arg of arguments) {
//     total += arg;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(10, 20, 30));
// console.log(sum(1, 2));

// Через rest
// const sum = function (...args) {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(10, 20, 30));
// console.log(sum(1, 2));
