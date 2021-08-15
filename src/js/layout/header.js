import { createRefreshButton, createDropDownButton, createRadioButton } from './buttons';
import { createSearchInput } from './inputs';

function headerComponent() {
  const header = document.createElement('header');
  header.appendChild(createRefreshButton());
  header.appendChild(createDropDownButton());
  header.appendChild(createRadioButton());
  header.appendChild(createSearchInput());
  return header;
}

document.body.appendChild(headerComponent());
