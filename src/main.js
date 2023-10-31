import { filterByStudio } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

const cardsContainer = document.querySelector("#root");
cardsContainer.innerHTML = renderItems(data);

const buttonStudio = document.querySelector('[name="studio"]');
buttonStudio.addEventListener("change", (e) => {
  const studioFilter = e.target.value;
  const filterData = filterByStudio(data, "studio", studioFilter);
  cardsContainer.innerHTML = renderItems(filterData);
});
console.log(filterByStudio, renderItems(data), data);

const clearButton = document.getElementById("button");
clearButton.addEventListener("click", function () {
  cardsContainer.innerHTML = renderItems(data);
});
