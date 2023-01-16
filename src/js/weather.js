// https://openweathermap.org/current
import { fetchWeatherByCityName } from './weatherApi.js';
import { createWeatherCard } from './templates/weather-card.js';

const searchFormEl = document.querySelector('.js-search-form');
const weatherCardWrapperEl = document.querySelector('.js-weather__wrapper');

const convertSecondsToHoursAndMinutes = seconds => {
  const date = new Date(seconds * 1000);

  return `${new String(date.getHours()).padStart(2, 0)}:${new String(
    date.getMinutes()
  ).padStart(2, 0)}`;
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedQuery = event.target.elements.user_country.value.trim();

  fetchWeatherByCityName(searchedQuery)
    .then(data => {
      console.log(data);

      data.sys.sunrise = convertSecondsToHoursAndMinutes(data.sys.sunrise);
      data.sys.sunset = convertSecondsToHoursAndMinutes(data.sys.sunset);

      weatherCardWrapperEl.innerHTML = createWeatherCard(data);
    })
    .catch(err => {
      if (err.message === '404') {
        alert('Погоди в такому місті не знайдено!');
      }
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
