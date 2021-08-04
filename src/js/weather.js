const temp = document.getElementById('temp');
const feelsLike = document.getElementById('feels-like');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');
const icon = document.getElementById('icon');
const desctiption = document.getElementById('desc');

function getWeather() {
  if (localStorage.getItem('location')) {
    const latitude = JSON.parse(window.localStorage.getItem('latitude'));
    const longitude = JSON.parse(window.localStorage.getItem('longitude'));
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0a56a45096652a831cb6980d524fe081&units=metric`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        temp.innerHTML = Math.round(data.main.temp);
        feelsLike.innerHTML = Math.round(data.main.feels_like);
        wind.innerHTML = Math.round(data.wind.speed);
        humidity.innerHTML = data.main.humidity;
        const weatherIcon = data.weather[0].icon;
        desctiption.innerHTML = data.weather[0].description;
        icon.setAttribute('src', `http://openweathermap.org/img/w/${weatherIcon}.png`);
        localStorage.setItem('Weather', JSON.stringify(data));
      })
      .catch((error) => console.log('Looks like there was a problem with weather data: ', error));
  }
}

getWeather();
