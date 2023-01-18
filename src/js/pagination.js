// https://jsonplaceholder.typicode.com/
fetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1')
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
