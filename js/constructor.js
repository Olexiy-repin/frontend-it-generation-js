/*
 * Клас - шаблон, за яким будуть створені однотипні об'єкти
 * Екземпляр - це об'єкт створений за класом
 * Інтерфейс - набір доступних методів та властивостей
 */

//? Функція конструктор
const User = function ({ firstName, lastName, age, phoneNumber, login, password }) {
  // this = {};
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.phoneNumber = phoneNumber;
  this.login = login;
  this.password = password;
  // return this;
};

console.dir(User);

User.prototype.changeFirstName = function (newName) {
  this.firstName = newName;
};

const user = new User({
  firstName: 'Edward',
  lastName: 'Smith',
  age: 30,
  phoneNumber: '(096) 58-05-459',
  login: 'id@si.pg',
  password: '123456',
});

const secondUser = new User({
  firstName: 'Michael',
  lastName: 'Gill',
  age: 20,
  login: 'cu@hecekalo.edu',
  phoneNumber: '(097) 60-62-231',
  password: 'qwerty123',
});

console.log(user);
// console.log(secondUser);

user.changeFirstName('Ivan');

console.log(user);
// console.log(secondUser);

// {
//   firstName: 'Edward',
//   lastName: 'Smith',
//   age: 30,
//   phoneNumber: '(096) 58-05-459';
//   login: 'id@si.pg';
//   password: '123456'
// };

//  {
//   firstName: 'Michael',
//   lastName: 'Gill',
//   age: 20,
//   login: 'cu@hecekalo.edu';
//   phoneNumber: '(097) 60-62-231';
//   password: 'qwerty123'
// };

//? Створюємо методи для наших екземплярів
