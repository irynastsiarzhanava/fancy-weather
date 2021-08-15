export default function createlocationBlock() {
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
