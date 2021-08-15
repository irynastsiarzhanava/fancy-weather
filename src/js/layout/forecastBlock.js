export default function createForecastBlock() {
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
