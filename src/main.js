import { searchByName } from "./dataFunctions.js";
import { filterByGenre, filterByStudio, filterByYear, computeStats, metricasTotales } from "./dataFunctions.js";
import { sortData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

//------------------------Data(Conteo de peliculas)-----------------------
let filtroAcumulativo = data;
const pcomputeStats = document.querySelector(".compute-stats");
pcomputeStats.innerHTML="Total de películas: " + computeStats(filtroAcumulativo);

//------------------------Metricas(enconstruccion)-----------------------

const pmetricas = document.querySelector(".metricas");
const totalesMetricas = document.createElement("p")
totalesMetricas.textContent = metricasTotales(data);
pmetricas.appendChild(totalesMetricas);

//------------------------Invocar  el container-----------------------
const cardsContainer = document.querySelector("#root");
cardsContainer.innerHTML = renderItems(filtroAcumulativo);

//------------------------Filtro de busqueda por input-----------------
const inputSearch = document.querySelector("#inputFilter");
// Seleccionamos un elemento del DOM para mostrar un mensaje cuando no hay resultados
const noResultsFound = document.querySelector("#noResultsFound");
inputSearch.addEventListener("input", () => {
  // Se obtiene el valor del campo de busqueda y se convierte en minuscula para que la busqueda no distinga entre minusculas y mayusculas
  const inputValue = inputSearch.value.toLowerCase();
  // Traemos la data con searchByName, la busqueda por input y el valor en minuscula. Busca y devuelve un arreglo con los elementos que coinciden con la busqueda
  const filteredDataByName = searchByName(filtroAcumulativo, "input", inputValue);
  // Verifica si la longitud del arreglo  es igual a 0, indicando que no se encontraron resultados
  if (filteredDataByName.length === 0) {
    noResultsFound.textContent =
      "No se encontraron resultados que coincidan con la búsqueda";
  } 
  // Actualiza el contenido de cards con los resultados de busqueda
  cardsContainer.innerHTML = renderItems(filteredDataByName, noResultsFound);
  pcomputeStats.innerHTML="Total de películas: " + computeStats(filteredDataByName);
});

//------------------------Filtro por año-----------------------------
const selectYear = document.querySelector('[name="year"]');
selectYear.addEventListener("change", (e) => {
  const yearSelected = e.target.value;
  filtroAcumulativo = filterByYear(filtroAcumulativo, "year", yearSelected);
  cardsContainer.innerHTML = renderItems(filtroAcumulativo);
  pcomputeStats.innerHTML="Total de películas: " + computeStats(filtroAcumulativo);
});

//------------------------Filtro por genero---------------------------
const selectGenre = document.querySelector('[name="genre"]');
selectGenre.addEventListener("change", (e) => {
  const genreSelected = e.target.value;
  filtroAcumulativo = filterByGenre(filtroAcumulativo, "genre", genreSelected);
  cardsContainer.innerHTML = renderItems(filtroAcumulativo);
  pcomputeStats.innerHTML="Total de películas: " + computeStats(filtroAcumulativo);
});

//------------------------Filtro por studio------------------------
const selectStudio = document.querySelector('[name="studio"]');
selectStudio.addEventListener("change", (e) => {
  const studioSelected = e.target.value;
  filtroAcumulativo = filterByStudio(filtroAcumulativo, "studio", studioSelected);
  cardsContainer.innerHTML = renderItems(filtroAcumulativo);
  pcomputeStats.innerHTML="Total de películas: " + computeStats(filtroAcumulativo);
});



//------------------------ascendente y descendente----------------------------- 
const selectOrder = document.querySelector('[name="name"]');
selectOrder.addEventListener("change", (e) => {
  const orderSelected = e.target.value;
  filtroAcumulativo = sortData(filtroAcumulativo, "name", orderSelected);
  cardsContainer.innerHTML = renderItems(filtroAcumulativo);
  pcomputeStats.innerHTML="Total de películas: " + computeStats(filtroAcumulativo);
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
    noResultsFound.innerHTML = "";
    filtroAcumulativo = data;
    cardsContainer.innerHTML = renderItems(filtroAcumulativo);
    pcomputeStats.innerHTML = "Total de películas: " + computeStats(filtroAcumulativo);
  });

});

