/* eslint-disable import/extensions */

const temp = document.getElementById('temp');
const feelsLike = document.getElementById('feels-like');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');

function getWeather() {
  if (localStorage.getItem('location') !== null) {
    const latitude = JSON.parse(window.localStorage.getItem('latitude'));
    const longitude = JSON.parse(window.localStorage.getItem('longitude'));
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0a56a45096652a831cb6980d524fe081&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        temp.innerHTML = data.main.temp;
        feelsLike.innerHTML = data.main.feels_like;
        wind.innerHTML = data.wind.speed;
        humidity.innerHTML = data.main.humidity;
        localStorage.setItem('Weather', JSON.stringify(data));
      });
  }
}

getWeather();
