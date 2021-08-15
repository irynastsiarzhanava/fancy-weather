export default function createOvercastBlock() {
  const overcast = document.createElement('div');
  overcast.setAttribute('class', 'overcast');
  overcast.innerHTML = `
  <h4>Overcast</h4>
  <p>Feels like: <span id="feels-like"></span>&#8451;</p>
  <p>Wind: <span id="wind"></span>m/s</p>
  <p>Humidity: <span id="humidity"></span>%</p>`;
  return overcast;
}
