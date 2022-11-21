/*
 * Методи об'єкта. this при зверненні до властивостей у методах
 */

/*
 * - changeTitle(newTitle) - змінює назву фільму
 * - addActor(newActor) - додає актора
 * - updateRating(newRating) - оновлює рейтинг фільму
 */

const filmDuna = {
  title: 'Duna',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, necessitatibus?',
  rating: 10,
  actors: [
    'Rosetta Pena',
    'Clayton Crawford',
    'Larry Norton',
    'Georgia Garrett',
    'Jackson Ballard',
  ],
  adult: false,

  changeTitle(newTitle) {
    this.title = newTitle;
  },

  addActor(newActor) {
    if (this.actors.includes(newActor)) {
      console.log('Такий актор/актриса вже є');
    } else {
      this.actors.push(newActor);
    }
  },

  updateRating(newRating) {
    this.rating = newRating;
  },
};

filmDuna.changeTitle('Venom');
console.log(filmDuna);

filmDuna.addActor('Alexander Massey');
console.log(filmDuna);

filmDuna.addActor('Rosetta Pena');

filmDuna.updateRating(8);
console.log(filmDuna);
