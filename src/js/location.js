import 'regenerator-runtime/runtime';

const country = document.getElementById('country');
const city = document.getElementById('city');
const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');

const locationData = async function getLocation() {
  const response = await fetch('https://geolocation-db.com/json/');
  const data = await response.json();
  return data;
};

locationData()
  .then((data) => {
    country.innerHTML = data.country_name;
    city.innerHTML = data.city;
    latitude.innerHTML = data.latitude;
    longitude.innerHTML = data.longitude;
    localStorage.setItem('location', JSON.stringify(data));
    localStorage.setItem('latitude', JSON.stringify(data.latitude));
    localStorage.setItem('longitude', JSON.stringify(data.longitude));
  })
  .catch((error) => error.message);
