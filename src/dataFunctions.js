
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
  // Crear una copia del array original, porque al hacer uso de sort editara el original
  const copyData = [...data];
  // Ordenar la copia del array utilizando el método "sort"
  copyData.sort((a, b) => {
    // Obtener el valor de la propiedad "sortBy" para los elementos "a" y "b"
    const valueA = a[sortBy];
    const valueB = b[sortBy];

    if (valueA === valueB) {
      return 0;
    }

    if (sortOrder === "asc") {
      // Determinar el orden ascendente
      if (valueA < valueB) {
        return -1;
      }
      return 1;
    }

    if (sortOrder === "desc") {
      // Determinar el orden descendente
      if (valueB < valueA) {
        return -1;
      }
      return 1;
    }
  });

  console.log(copyData);
  return copyData;
};


//una función computeStats que tiene al menos un parámetro (data) y devuelve un valor computado
export const computeStats = (data) => {
  const longitud = data.reduce((acumulador) => acumulador + 1, 0);
  return longitud;
};

/*
export const computeStatsStudios = (data) => {
  const estudios = data['facts']['studio'];

  const conteoEstudios = estudios.reduce((contador, estudio) => {
    const regex = /CoMix Wave Films|Gainax|Kyoto Animation|Madhouse|Production I.G|Studio Ghibli|Sunrise|TMS Entertainment|Toei Animation|Ufotable|Why Not Productions|Wild Bunch/g;
    if (regex.test(estudio)) {
      contador[estudio] = (contador[estudio] || 0) + 1;
    }
    return contador;
  }, {});

  const sortedEstudios = Object.entries(conteoEstudios)
    .sort((a, b) => b[1] - a[1])
    .map(([estudio, count]) => `${estudio}: ${count}`);

return sortedEstudios
};

_______________________________________ antiguo
export const computeStatsStudio = (data) => {
  const contadorStudio = data['facts']['studio'].reduce((contador, studio) => {
    contador[studio] = (contador[studio] || 0) + 1;
    return contador;
  }, {});
  const valoresNumericos = contadorStudio.filter(item => typeof item === Number);
  const maximoNumerico = Math.max(...valoresNumericos);
  return maximoNumerico;
};
*/
