import createLocationBlock from './locationBlock';
import createOvercastBlock from './overcastBlock';

export default function createWeatherBlock() {
  const weather = document.createElement('section');
  weather.setAttribute('class', 'weather');
  weather.appendChild(createLocationBlock());
  weather.appendChild(createOvercastBlock());
  return weather;
}
