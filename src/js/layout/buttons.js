export function createRefreshButton() {
  const button = document.createElement('button');
  button.classList.add('btn', 'refresh');
  button.innerHTML = '<i>&#x21bb;</i>';
  return button;
}
export function createDropDownButton() {
  const dropdown = document.createElement('div');
  dropdown.setAttribute('class', 'dropdown');
  dropdown.innerHTML = `
  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    EN
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">RU</a></li>
    <li><a class="dropdown-item" href="#">PL</a></li>
  </ul>`;
  return dropdown;
}
export function createRadioButton() {
  const metric = document.createElement('div');
  metric.setAttribute('class', 'btn-group');
  metric.setAttribute('role', 'group');
  metric.setAttribute('aria-label', 'Basic radio toggle button group');
  metric.innerHTML = `
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">&#8451;</label>
  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">&#8457;</label>`;
  return metric;
}

export default { createRefreshButton, createDropDownButton, createRadioButton };
