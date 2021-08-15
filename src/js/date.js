const daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const currentDate = document.getElementById('date');

const day1 = document.getElementById('day1');
const day2 = document.getElementById('day2');
const day3 = document.getElementById('day3');

function getDate() {
  const myDate = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const afterTomorrow = new Date();
  afterTomorrow.setDate(afterTomorrow.getDate() + 2);
  const afterAfterTomorrow = new Date();
  afterAfterTomorrow.setDate(afterAfterTomorrow.getDate() + 3);
  const date = myDate.getDate();
  const month = monthsList[myDate.getMonth() + 1];
  const day = daysList[myDate.getDay()];
  currentDate.innerHTML = `${day} ${date} ${month}`;
  day1.innerHTML = daysList[tomorrow.getDay()];
  day2.innerHTML = daysList[afterTomorrow.getDay()];
  day3.innerHTML = daysList[afterAfterTomorrow.getDay()];
}

getDate();
