/*
 * for...in, Object.keys, Object.values
 */

//? Отримайте суму зарплат усіх працівників
// Перебор обʼєкта через for...in
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let total = 0;

// for (const key in salaries) {
//   // total = total + salaries[key];
//   total += salaries[key];
// }

// console.log(total);

// Перебор обʼєкта через  Object.keys + for...of
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let total = 0;
// const keysArray = Object.keys(salaries);

// for (const key of keysArray) {
//   total += salaries[key];
// }

// console.log(total);

// Перебор обʼєкта через Object.values + for...of
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let total = 0;
// const valuesArray = Object.values(salaries);

// console.log(valuesArray);

// for (const value of valuesArray) {
//   total += value;
// }

// console.log(total);
