export function createSearchInput() {
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

export default { createSearchInput };
