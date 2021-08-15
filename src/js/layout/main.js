import createMapBlock from './mapBlock';
import createForecastBlock from './forecastBlock';
import createWeatherBlock from './weatherBlock';

function mainComponent() {
  const main = document.createElement('main');
  main.appendChild(createWeatherBlock());
  main.appendChild(createForecastBlock());
  main.appendChild(createMapBlock());
  return main;
}

document.body.appendChild(mainComponent());
