export default function createMapBlock() {
  const map = document.createElement('section');
  map.setAttribute('class', 'map-block');
  map.innerHTML = `
  <div id="map"></div>
  <div>Latitude: <span id="latitude"></span></div>
  <div>Longitude: <span id="longitude"></span></div>`;
  return map;
}
