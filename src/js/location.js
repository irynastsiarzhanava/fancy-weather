const country = document.getElementById('country');
const state = document.getElementById('state');
const city = document.getElementById('city');
const postal = document.getElementById('postal');
const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');
const ip = document.getElementById('ipv4');

function getLocation() {
  fetch('https://geolocation-db.com/json/')
    .then((response) => response.json())
    .then((data) => {
      country.innerHTML = data.country_name;
      state.innerHTML = data.state;
      city.innerHTML = data.city;
      postal.innerHTML = data.postal;
      latitude.innerHTML = data.latitude;
      longitude.innerHTML = data.longitude;
      ip.innerHTML = data.IPv4;
      localStorage.setItem('location', JSON.stringify(data));
      localStorage.setItem('latitude', JSON.stringify(data.latitude));
      localStorage.setItem('longitude', JSON.stringify(data.longitude));
    });
}

// eslint-disable-next-line no-unused-vars
getLocation();
