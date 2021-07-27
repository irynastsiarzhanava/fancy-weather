function headerComponent() {
  const header = document.createElement('header');
  // refresh button
  const button = document.createElement('button');
  button.classList.add('btn', 'refresh');
  button.innerHTML = '<i>&#x21bb;</i>';
  header.appendChild(button);
  // language dropdown
  const dropdown = document.createElement('div');
  dropdown.setAttribute('class', 'dropdown');
  dropdown.innerHTML = `
    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      EN
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item" href="#">RU</a></li>
      <li><a class="dropdown-item" href="#">PL</a></li>
    </ul>`;
  header.appendChild(dropdown);
  // metric radio button
  const metric = document.createElement('div');
  metric.setAttribute('class', 'btn-group');
  metric.setAttribute('role', 'group');
  metric.setAttribute('aria-label', 'Basic radio toggle button group');
  metric.innerHTML = `
    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
    <label class="btn btn-outline-primary" for="btnradio1">&#8451;</label>
    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
    <label class="btn btn-outline-primary" for="btnradio2">&#8457;</label>`;
  header.appendChild(metric);
  // search input
  const search = document.createElement('div');
  search.setAttribute('class', 'input-group');
  search.innerHTML = `
    <input type="text" class="form-control" placeholder="Search city">
    <div class="input-group-append">
      <button class="btn btn-secondary" type="button">
        <i class="fa fa-search"></i>
      </button>
    </div>`;
  header.appendChild(search);
  return header;
}

function mainComponent() {
  const main = document.createElement('main');
  // section Weather
  const weather = document.createElement('section');
  weather.setAttribute('class', 'weather');
  // location inside Weather section
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
  weather.appendChild(location);
  // overcast inside Weather section
  const overcast = document.createElement('div');
  overcast.setAttribute('class', 'overcast');
  overcast.innerHTML = `
    <h4>Overcast</h4>
    <p>Feels like: <span id="feels-like"></span>&#8451;</p>
    <p>Wind: <span id="wind"></span>m/s</p>
    <p>Humidity: <span id="humidity"></span>%</p>`;
  weather.appendChild(overcast);
  main.appendChild(weather);
  // section Forecast
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
  main.appendChild(forecast);
  // section map
  const map = document.createElement('section');
  map.setAttribute('class', 'map-block');
  map.innerHTML = `
    <div id="map"></div>
    <div>Latitude: <span id="latitude"></span></div>
    <div>Longitude: <span id="longitude"></span></div>`;
  main.appendChild(map);
  return main;
}

document.body.appendChild(headerComponent());
document.body.appendChild(mainComponent());
