import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

console.log(example, renderItems(data), data);

const cardsContainer = document.querySelector("#root");
cardsContainer.innerHTML = renderItems(data);





const clearButton = document.getElementById("button");
clearButton.addEventListener("click", function () {
  cardsContainer.innerHTML = renderItems(data);
});

/*main

  datosFiltrados.forEach(function(renderItems) {
        let genero = document.createElement('option[value="genero-op"]');
        let accion = document.createElement('option[value="action"]');
        accion.innerHTML = showInHtml.accion;
      accion.innerHTML = items.accion;
    };

function filtrarDatos() {
    let filtrogenero = document.querySelector('label[for="genre"]').value;
    mostrarDatos(filtrogenero);
};
