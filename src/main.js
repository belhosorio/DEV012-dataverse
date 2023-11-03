import { searchByName } from "./dataFunctions.js";
import { filterByYear } from "./dataFunctions.js";
import { filterByGenre } from "./dataFunctions.js";
import { filterByStudio } from "./dataFunctions.js";
import { fijaData } from "./dataFunctions.js";
//import { sortData } from "./dataFunctions.js";

import { renderItems } from "./view.js";
import data from "./data/dataset.js";

//------------------------Invocar  el container-----------------------
const cardsContainer = document.querySelector("#root");
cardsContainer.innerHTML = renderItems(data);

//------------------------Filtro de busqueda por iput-----------------
const inputSearch = document.querySelector("#inputFilter");
inputSearch.addEventListener("input", () => {
  // Se obtiene el valor del campo de busqueda y se convierte en minuscula para que la busqueda no distinga entre minusculas y mayusculas
  const inputValue = inputSearch.value.toLowerCase();
  // Seleccionamos un elemento del DOM para mostrar un mensaje cuando no hay resultados
  const noResultsFound = document.querySelector("#noResultsFound");
  // Traemos la data con searchByName, la busqueda por input y el valor en minuscula. Busca y devuelve un arreglo con los elementos que coinciden con la busqueda
  const filteredDataByName = searchByName(data, "input", inputValue);
  // Verifica si la longitud del arreglo  es igual a 0, indicando que no se encontraron resultados
  if (filteredDataByName.length === 0) {
    noResultsFound.textContent =
      "No se encontraron resultados que coincidan con la búsqueda";
  } else {
    noResultsFound.textContent = "";
  }
  // Actualiza el contenido de cards con los resultados de busqueda
  cardsContainer.innerHTML = renderItems(filteredDataByName, noResultsFound);
});

//------------------------Filtro por año-----------------------------
const selectYear = document.querySelector('[name="year"]');
selectYear.addEventListener("change", (e) => {
  const yearSelected = e.target.value;
  const filteredDataByYear = filterByYear(data, "year", yearSelected);
  cardsContainer.innerHTML = renderItems(filteredDataByYear);
});

//------------------------Filtro por genero---------------------------
const selectGenre = document.querySelector('[name="genre"]');
selectGenre.addEventListener("change", (e) => {
  const genreSelected = e.target.value;
  const filteredDataByGenre = filterByGenre(data, "genre", genreSelected);
  cardsContainer.innerHTML = renderItems(filteredDataByGenre);
});

//------------------------Filtro por studio------------------------
const selectStudio = document.querySelector('[name="studio"]');
selectStudio.addEventListener("change", (e) => {
  const studioSelected = e.target.value;
  const filteredDataByStudio = filterByStudio(data, "studio", studioSelected);
  cardsContainer.innerHTML = renderItems(filteredDataByStudio);
});

console.log(filterByStudio, filterByYear, renderItems(data), data);

//------------------------En construcción----------------------------- No esta leyendo el sortData
const selectOrder = document.querySelector('[name="ordenAlfabetico"]');
selectOrder.addEventListener("change", (e) => {
  const orderSelected = e.target.value;
  const sortedData = sortData(data, "name", orderSelected);
  cardsContainer.innerHTML = renderItems(sortedData);
});

//------------------------Boton limpiar-----------------------------
const clearButton = document.getElementById("button");
clearButton.addEventListener("click", function () {
  //Selecciona todos los elementos select y los alamacena en la variable selectores para acceder a todos los elementos
  const selectores = document.querySelectorAll("select");
  //Aquí buscaba restablecer el botón de busqueda por nombre en el textContent pero no funciona, unicamente funciona si se le da x en el cuadro de busqueda
  const searchInput = document.querySelector('[name="searchButton"]');
  // Se utiliza un bucle forEach para recorrer todos los select
  selectores.forEach((selector) => {
    // Establecemos el valor del elemento select (actual selector) en la primera opción en la lista de opciones, restableciendo el elmento select a su opción predeterminda
    selector.value = selector.options[0].value; // Establece la opción predeterminada
    searchInput.value = ""; //Era para limpiar el textContent pero no funciona
  });
  noResultsFound.innerHTML = "";
  cardsContainer.innerHTML = renderItems(data);
  pDataFija.innerHTML = "";
});

//Data fija

const pDataFija = document.querySelector('.data-fija');
const resultadoP = (filterData, filterDataGen, filterDataYea) => {
  resultadoP = renderItems(filterData) + renderItems(filterDataGen) + renderItems(filterDataYea);
  return resultadoP.length;
}; 


/*
const pDataFija = document.querySelector('.data-fija');
pDataFija.addEventListener("input", function () {
  const resultadoP = pDataFija.value;
  const fijaDt = fijaData(data);
  pDataFija.innerHTML = "Resultados de Busqueda: " + fijaDt;
 });


const pDataFija = document.querySelector(".data-fija");
const resultadoP = (filteredDataByYear, filteredDataByGenre, filteredDataByStudio) => {
  // (filterData, filterDataGen, filterDataYea)
  const filteredDataByYear = fijaData(data);
  cardsContainer.innerHTML = renderItems(filteredDataByYear);
};
*/
console.log(filterByStudio, renderItems(data), data);
