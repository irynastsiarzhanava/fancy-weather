import { roundFunction } from './helpers';

const tempForecastDay1 = document.getElementById('temp-forecast-day1');
const tempForecastDay2 = document.getElementById('temp-forecast-day2');
const tempForecastDay3 = document.getElementById('temp-forecast-day3');
const iconDay1 = document.getElementById('icon-day1');
const iconDay2 = document.getElementById('icon-day2');
const iconDay3 = document.getElementById('icon-day3');

function getForecast() {
  if (localStorage.getItem('location')) {
    const latitude = JSON.parse(window.localStorage.getItem('latitude'));
    const longitude = JSON.parse(window.localStorage.getItem('longitude'));
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=0a56a45096652a831cb6980d524fe081&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        tempForecastDay1.innerHTML = roundFunction(data.daily[1].temp.day);
        tempForecastDay2.innerHTML = roundFunction(data.daily[2].temp.day);
        tempForecastDay3.innerHTML = roundFunction(data.daily[3].temp.day);
        const weatherIcon1 = data.daily[1].weather[0].icon;
        const weatherIcon2 = data.daily[2].weather[0].icon;
        const weatherIcon3 = data.daily[3].weather[0].icon;
        iconDay1.setAttribute('src', `http://openweathermap.org/img/w/${weatherIcon1}.png`);
        iconDay2.setAttribute('src', `http://openweathermap.org/img/w/${weatherIcon2}.png`);
        iconDay3.setAttribute('src', `http://openweathermap.org/img/w/${weatherIcon3}.png`);
        localStorage.setItem('Forecast', JSON.stringify(data));
      })
      .catch((error) => console.log('Looks like there was a problem with forecast data: ', error));
  }
}

getForecast();
