const daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const currentDate = document.getElementById('date');
const currentTime = document.getElementById('time');

const day1 = document.getElementById('day1');
const day2 = document.getElementById('day2');
const day3 = document.getElementById('day3');

function getDateTime() {
  const myDate = new Date();
  const date = myDate.getDate();
  const month = monthsList[myDate.getMonth() + 1];
  const day = daysList[myDate.getDay()];
  let hours = myDate.getHours();
  let minutes = myDate.getMinutes();
  if (hours.toString().length === 1) {
    hours = `0${hours}`;
  }
  if (minutes.toString().length === 1) {
    minutes = `0${minutes}`;
  }
  currentDate.innerHTML = `${day} ${date} ${month}`;
  currentTime.innerHTML = `    ${hours}:${minutes}`;
  day1.innerHTML = daysList[myDate.getDay() + 1];
  day2.innerHTML = daysList[myDate.getDay() + 2];
  day3.innerHTML = daysList[myDate.getDay() + 3];
}

setInterval(getDateTime(), 60000);
