function headerComponent() {
  const header = document.createElement('header');

  function createButton() {
    const button = document.createElement('button');
    button.classList.add('btn', 'refresh');
    button.innerHTML = '<i>&#x21bb;</i>';
    return button;
  }
  function createDropDown() {
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
  function createRadioButton() {
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
  function createSearchInput() {
    const search = document.createElement('div');
    search.setAttribute('class', 'input-group');
    search.innerHTML = `
    <input type="text" class="form-control" placeholder="Search city">
    <div class="input-group-append">
      <button class="btn btn-secondary" type="button">
        <i class="fa fa-search"></i>
      </button>
    </div>`;
    return search;
  }
  header.appendChild(createButton());
  header.appendChild(createDropDown());
  header.appendChild(createRadioButton());
  header.appendChild(createSearchInput());
  return header;
}

document.body.appendChild(headerComponent());
