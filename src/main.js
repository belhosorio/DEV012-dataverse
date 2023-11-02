import { searchByName } from "./dataFunctions.js";
import { filterByYear } from "./dataFunctions.js";
import { filterByGenre } from "./dataFunctions.js";
import { filterByStudio } from "./dataFunctions.js";

import { renderItems } from "./view.js";

import data from "./data/dataset.js";

const cardsContainer = document.querySelector("#root");
cardsContainer.innerHTML = renderItems(data);

const inputSearch = document.querySelector("#inputFilter");
inputSearch.addEventListener("input", () => {
  const inputValue = inputSearch.value.toLowerCase();
  const noResultsFound = document.querySelector("#noResultsFound");
  const filteredDataByName = searchByName(data, "input", inputValue);
  if (filteredDataByName.length === 0) {
    noResultsFound.textContent =
      "No se encontraron resultados que coincidan con la búsqueda";
  } else {
    noResultsFound.textContent = "";
  }
  cardsContainer.innerHTML = renderItems(filteredDataByName, noResultsFound);
});
const selectYear = document.querySelector('[name="year"]');
selectYear.addEventListener("change", (e) => {
  const yearSelected = e.target.value;
  const filteredDataByYear = filterByYear(data, "year", yearSelected);
  cardsContainer.innerHTML = renderItems(filteredDataByYear);
});
const selectGenre = document.querySelector('[name="genre"]');
selectGenre.addEventListener("change", (e) => {
  const genreSelected = e.target.value;
  const filteredDataByGenre = filterByGenre(data, "genre", genreSelected);
  cardsContainer.innerHTML = renderItems(filteredDataByGenre);
});
const selectStudio = document.querySelector('[name="studio"]');
selectStudio.addEventListener("change", (e) => {
  const studioSelected = e.target.value;
  const filteredDataByStudio = filterByStudio(data, "studio", studioSelected);
  cardsContainer.innerHTML = renderItems(filteredDataByStudio);
});

console.log(filterByStudio, filterByYear, renderItems(data), data);

const clearButton = document.getElementById("button");
clearButton.addEventListener("click", function () {
  cardsContainer.innerHTML = renderItems(data);
});
