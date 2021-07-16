const currentTime = document.getElementById('time');

function getTime() {
  const myTime = new Date();
  let hours = myTime.getHours();
  let minutes = myTime.getMinutes();
  if (hours.toString().length === 1) {
    hours = `0${hours}`;
  }
  if (minutes.toString().length === 1) {
    minutes = `0${minutes}`;
  }
  currentTime.innerHTML = `    ${hours}:${minutes}`;
  setInterval(getTime, 60000);
}
getTime();
