import { filterByStudio } from "./dataFunctions.js";
import { filterByGenre } from "./dataFunctions.js";
import { filterByYear } from "./dataFunctions.js";
import { fijaData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

//invocar  el container
const cardsContainer = document.querySelector("#root");
cardsContainer.innerHTML = renderItems(data);

//filtro studio
const buttonStudio = document.querySelector('[name="studio"]');
buttonStudio.addEventListener("change", (e) => {
  const studioFilter = e.target.value;
  const filterData = filterByStudio(data, "studio", studioFilter);
  cardsContainer.innerHTML = renderItems(filterData);
});

//filtro genero
const buttonGenre = document.querySelector('[name="genre"]');
buttonGenre.addEventListener("change", (e) => {
  const genreFilter = e.target.value;
  const filterDataGen = filterByGenre(data, "genre", genreFilter);
  cardsContainer.innerHTML = renderItems(filterDataGen);
});

//filtro año
const buttonYear = document.querySelector('[name="year"]');
buttonYear.addEventListener("change", (e) => {
  const yearFilter = e.target.value;
  const filterDataYea = filterByYear(data, "year", yearFilter);
  cardsContainer.innerHTML = renderItems(filterDataYea);
});

//boton limpiar
const clearButton = document.getElementById("button");
clearButton.addEventListener("click", function () {
  cardsContainer.innerHTML = renderItems(data);
  pDataFija.innerHTML = "Resultado de Busqueda: 0";
});

//Data fija
/*const pDataFija = document.querySelector('.data-fija');
const resultadoP = (filterData, filterDataGen, filterDataYea) => {
  resultadoP = renderItems(filterData) + renderItems(filterDataGen) + renderItems(filterDataYea);
  return resultadoP.length;
}; 

pDataFija.addEventListener("input", function () {
 pDataFija.innerHTML = "Resultados de Busqueda: " + resultadoP;
});
*/

const pDataFija = document.querySelector('.data-fija');
const resultadoP = (filterData, filterDataGen, filterDataYea) => {
  
  const filterDataYea = fijaData(data);
  cardsContainer.innerHTML = renderItems(filterDataYea);
};

console.log(filterByStudio, renderItems(data), data);


