
// una función filterBy que tiene 3 parámetros (data, filterBy, value) y devuelve el arreglo filtrado
//Unicamente se hará uso de funciones puras

export const searchByName = (data, searchBy, input) => {
  if (searchBy === "input") {
    //El metodo filter crea un nuevo arreglo que contiene solo los elementos que cumplan con una condición especifica
    // La condición que se evaluaen filter es por una función flecha
    const filteredDataByName = data.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    return filteredDataByName;
  }
};

export const filterByGenre = (data, filterBy, value) => {
  return data.filter((item) => item.facts[filterBy].includes(value));
};

export const filterByStudio = (data, filterBy, value) => {
  return data.filter((item) => item.facts[filterBy].includes(value));
};

export const filterByYear = (data, filterBy, value) => {
  if (data && !isNaN(value)) {
    return data.filter((item) => item.facts[filterBy] === Number(value));
  }
};

/*
export const filterByYear = (data, filterBy, value) => {
  if (filterBy === "year") {
    const filteredDataByYear = [];
    for (let i = 0; i < data.length; i++) {
      const storesMovieByYear = data[i].facts.year;

      if (Number(storesMovieByYear) === Number(value)) {
        filteredDataByYear.push(data[i]);
      }
    }
    return filteredDataByYear;
  }
};
*/

//una función sortBy que tiene 3 parámetros (data, sortBy, sortOrder) y devuelve el arreglo ordenado
export const sortData = (data, sortBy, sortOrder) => {
  const copyData = [...data];

  copyData.sort((a, b) => {
    const valueA = a[sortBy];
    const valueB = b[sortBy];

    if (valueA === valueB) {
      return 0;
    }

    if (sortOrder === "asc") {
      return valueA < valueB ? -1 : 1;
    }

    if (sortOrder === "desc") {
      return valueA < valueB ? 1 : -1;
    }
  });

  return copyData;
};


//una función computeStats que tiene al menos un parámetro (data) y devuelve un valor computado
//fijaData
export const computeStats = (data) => {
  const longitud = data.reduce((acumulador) => acumulador + 1, 0);
  return longitud;
};


// metricas en proceso ---------------------------------
/*
export const FijaDataStudio = (data) => {
  const studioLongitud = (data.facts.studio).reduce((acumulador) => acumulador + 1, 0);
  return studioLongitud;
};
*/
