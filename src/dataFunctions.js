/*una función sortBy que tiene 3 parámetros (data, sortBy, sortOrder) y devuelve el arreglo ordenado
 una función filterBy que tiene 3 parámetros (data, filterBy, value) y devuelve el arreglo filtrado
 una función computeStats que tiene al menos un parámetro (data) y devuelve un valor computado */

// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
export const example = () => {
  return "example";
};

export const anotherExample = () => {
  return [];
};

export const filterByStudio = (data, filterBy, value) => {
  if (filterBy === "studio") {
    const resultFilterByStudio = [];
    for (let i = 0; i < data.length; i++) {
      const filterStudio = data[i].facts.studio;
      //console.log(filterByStudio)
      if (filterStudio === value) {
        resultFilterByStudio.push(data[i]);
      }
    }
    return resultFilterByStudio;
  }
};
/*
  inputElement.addEventListener("keyup", (e) =>{
    if{e.target.matches(input){
      console.log(e.target.value)
      inputElement.querySelectorAll(".nombre")
    }
  });

}


export const genreFilter = renderItems.filter(function(data, filterBy, value ){
  return renderItems.genre === genre
});


export const nameFilter = () => {
  filterByID(data, filterBy, value)

*/
/*
sintaxis
var newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])



ejemplo 1
const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

let invalidEntries = 0;

function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

const arrByID = arr.filter(filterByID);

console.log("Filtered Array\n", arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log("Number of Invalid Entries =", invalidEntries);
// Number of Invalid Entries = 5 */
