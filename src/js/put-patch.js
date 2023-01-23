/*
 * Method(PUT/PATCH). Headers ("Content-Type": "application/json"). Body.
 */

const BASE_URL = 'http://localhost:3000';

const updateUserInfo = (userId, userInfo) => {
  return fetch(`${BASE_URL}/users/${userId}`, {
    method: 'PUT',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};

updateUserInfo(11, {
  name: 'Clementina DuBuque',
  username: 'Moriah.Stanton',
  email: 'Rey.Padberg@karina.biz',
  address: {
    street: 'Kattie Turnpike',
    suite: 'Suite 198',
    city: 'Lebsackbury',
    zipcode: '31428-2261',
    geo: {
      lat: '-38.2386',
      lng: '57.2232',
    },
  },
  phone: '(231) 515-8372',
  website: 'ambrose.net',
  company: {
    name: 'Hoeger LLC',
    catchPhrase: 'Centralized empowering task-force',
    bs: 'target end-to-end models',
  },
})
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
