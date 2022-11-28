/*
 * forEach() замість циклів for і for...of для масивів
 */

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// Через for...of
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// fruits.forEach((el, idx, arr) => {
//   console.log(el);
// });

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/
// function logItems(items) {
//   console.log(items);

//   // for (let i = 0; i < items.length; i += 1) {
//   //   console.log(`${i + 1} - ${items[i]}`);
//   // }

//   items.forEach((el, idx, arr) => {
//     console.log(`${idx + 1} - ${el}`);
//   });
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
