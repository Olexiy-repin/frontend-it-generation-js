/*
 *  Методи функцій call та apply
 */

//* Функції це об'єкти зі своїми властивостями та методами

// const greet = function () {
//   console.log('Hello!');
// };

// greet.test = 10;

// console.dir(greet);

//* call та apply
//? Викличте функцію showFullName у контексті об'єкта user
// const showFullName = function (message, number) {
//   console.log(`${message} ${this.firstName} ${this.lastName}`);
//   console.log(number);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// showFullName.call(user, 'Hello', 10);
// showFullName.apply(user, ['Hello', 10]);

//? Викличте функцію showFullName у контексті об'єкта anotherUser
// const anotherUser = {
//   firstName: 'Lottie',
//   lastName: 'Burgess',
//   age: 40,
// };

// showFullName.call(anotherUser, 'Hello', 20);
// showFullName.apply(anotherUser, ['Hello', 20]);

//* bind
// const showFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// const showUserFullName = showFullName.bind(user);

// showUserFullName();

// const anotherUser = {
//   firstName: 'Lottie',
//   lastName: 'Burgess',
//   age: 40,
// };

// const showAnotherUserFullName = showFullName.bind(anotherUser);

// showAnotherUserFullName();

//* Метод об'єкта у ролі колбека
// const user = {
//   name: 'Luis',
//   age: 30,

//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };

// const someFunction = function (callback) {
//   /* callback = function () {
//     this = user;
//     console.log(`this name is: ${this.name}`);
//   }
//   */
//   callback();
// };

// someFunction(user.showName.bind(user));

/*
? Що виведе код?
*/
// const f = function () {
//   console.log(this.name);
// };

// const user = {
//   name: 'Василь',
// };

// const anotherUser = {
//   name: 'Петро',
// };

// const copyFunc = f.bind(user).bind(anotherUser);

// copyFunc();
