const country = document.getElementById('country');
const city = document.getElementById('city');
const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');

function getLocation() {
  fetch('https://geolocation-db.com/json/')
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      country.innerHTML = data.country_name;
      city.innerHTML = data.city;
      latitude.innerHTML = data.latitude;
      longitude.innerHTML = data.longitude;
      localStorage.setItem('location', JSON.stringify(data));
      localStorage.setItem('latitude', JSON.stringify(data.latitude));
      localStorage.setItem('longitude', JSON.stringify(data.longitude));
    })
    .catch((error) => console.log('Looks like there was a problem with location data: ', error));
}

// eslint-disable-next-line no-unused-vars
getLocation();
