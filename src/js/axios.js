import axios from 'axios';

console.dir(axios);

const BASE_URL = 'http://localhost:3000';

axios
  .get(`${BASE_URL}/users`)
  .then(response => {
    const { data } = response;

    console.log(response);
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
