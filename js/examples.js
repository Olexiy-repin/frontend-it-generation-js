/*
? Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю та розраховує
? і повертає загальну вартість каменів з таким ім'ям.
*/
// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600
// console.log(chopShop.calcTotalPrice('Ametist')); // Такого каменя не знайдено

/*
? Виконайте рефакторинг методів об'єкта phonebook щоб код запрацював.
*/
// const phonebook = {
//   contacts: [],

//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: generateId(),
//       createdAt: getDate(),
//     };

//     contacts.push(newContact);
//   },

//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },

//   getDate() {
//     return Date.now();
//   },
// };

// phonebook.add({
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friends',
// });

// phonebook.add({
//   name: 'Poly',
//   email: 'poly@hotmail.com',
// });

// console.log(phonebook);

/*
? Створіть об'єкт calculator із трьома методами:
?
? read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
? add() - повертає суму збережених значень.
? mult() - перемножує збережені значення та повертає результат.
*/

// const calculator = {};

// calculator.read(20, 20);

// console.log(calculator.add());
// console.log(calculator.mult());
