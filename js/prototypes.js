/*
 * Ланцюжки прототипів.
 * Object.create().
 * obj.hasOwnProperty()
 */

// const methods = {
//   gender: 'male',
//   test: 10,

//   changeName(newName) {
//     this.firstName = newName;
//   },
// };

// const user = Object.create(methods);
// user.firstName = 'Oleksii';
// user.age = 40;

// const secondUser = Object.create(methods);
// secondUser.firstName = 'Cynthia';
// secondUser.age = 20;

// console.log('user ---> ', user);
// console.log('secondUser ---> ', secondUser);

// user.changeName('Bobby');
// secondUser.changeName('Leah');

// console.log('user ---> ', user);
// console.log('secondUser ---> ', secondUser);

//* Власні та не власні властивості об'єкта

//* Перевірка власних властивостей obj.hasOwnProperty()

//* Цикл for...in, перебирає і власні, і не власні властивості.
// for (const prop in secondUser) {
//   if (secondUser.hasOwnProperty(prop)) {
//     console.log(prop);
//   }
// }
