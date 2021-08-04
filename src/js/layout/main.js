function mainComponent() {
  const main = document.createElement('main');

  function createWeatherBlock() {
    const weather = document.createElement('section');
    weather.setAttribute('class', 'weather');

    function createlocationBlock() {
      const location = document.createElement('div');
      location.setAttribute('class', 'location');
      location.innerHTML = `
      <h1><span id="city"></span>, <span id="country"></span></h1>
      <p><span id="date"></span><span id="time"></span></p>
      <div>
        <p class="temp"><span id="temp"></span>&#8451;</p>
        <figure><img id="icon" alt="Weather icon"></figure>
      </div>
      <div class="desc"><span id="desc"></span></div>`;
      return location;
    }

    function createOvercastBlock() {
      const overcast = document.createElement('div');
      overcast.setAttribute('class', 'overcast');
      overcast.innerHTML = `
      <h4>Overcast</h4>
      <p>Feels like: <span id="feels-like"></span>&#8451;</p>
      <p>Wind: <span id="wind"></span>m/s</p>
      <p>Humidity: <span id="humidity"></span>%</p>`;
      return overcast;
    }

    weather.appendChild(createlocationBlock());
    weather.appendChild(createOvercastBlock());
    return weather;
  }

  function createForecastBlock() {
    const forecast = document.createElement('section');
    forecast.setAttribute('class', 'forecast');
    forecast.innerHTML = `
    <h4>3 days forecast</h4>
    <div>
      <span id="day1"></span>
      <p><span id='temp-forecast-day1'></span>&#8451;</p>
      <figure><img id="icon-day1" alt="Weather icon"></figure>
    </div>
    <div>
      <span id="day2"></span>
      <p><span id='temp-forecast-day2'></span>&#8451;</p>
      <figure><img id="icon-day2" alt="Weather icon"></figure>
    </div>
    <div>
      <span id="day3"></span>
      <p><span id='temp-forecast-day3'></span>&#8451;</p>
      <figure><img id="icon-day3" alt="Weather icon"></figure>
    </div>`;
    return forecast;
  }

  function createMapBlock() {
    const map = document.createElement('section');
    map.setAttribute('class', 'map-block');
    map.innerHTML = `
    <div id="map"></div>
    <div>Latitude: <span id="latitude"></span></div>
    <div>Longitude: <span id="longitude"></span></div>`;
    return map;
  }

  main.appendChild(createWeatherBlock());
  main.appendChild(createForecastBlock());
  main.appendChild(createMapBlock());
  return main;
}

document.body.appendChild(mainComponent());
