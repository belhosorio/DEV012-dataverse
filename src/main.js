import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const cardsContainer = document.querySelector("#root")
  cardsContainer.innerHTML = renderItems(data);

console.log(example, renderItems(data), data);
