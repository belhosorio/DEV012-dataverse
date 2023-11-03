/*una función sortBy que tiene 3 parámetros (data, sortBy, sortOrder) y devuelve el arreglo ordenado
 una función filterBy que tiene 3 parámetros (data, filterBy, value) y devuelve el arreglo filtrado
 una función computeStats que tiene al menos un parámetro (data) y devuelve un valor computado */
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
export const filterByGenre = (data, filterBy, value) => {
  if (filterBy === "genre") {
    const selectedGenre = value.split(",").map((genre) => genre.trim());
    const resultFilterByGenre = data.filter((item) => {
      const storesMovieGenre = item.facts.genre
        .split(",")
        .map((genre) => genre.trim());
      return selectedGenre.some((selectedGenre) =>
        storesMovieGenre.includes(selectedGenre)
      );
    });
    return resultFilterByGenre;
  }
};

export const filterByStudio = (data, filterBy, value) => {
  if (filterBy === "studio") {
    const selectedStudio = value.split(",").map((studio) => studio.trim());
    const resultFilterByStudio = data.filter((item) => {
      const storesMovieStudio = item.facts.studio
        .split(",")
        .map((studio) => studio.trim());
      return selectedStudio.some((selectedStudio) =>
        storesMovieStudio.includes(selectedStudio)
      );
    });
    return resultFilterByStudio;
  }
};

/* ------------Uso de for en genero--------------
    export const filterByGenre = (data, filterBy, value) => {
      if (filterBy === "genre") {
        const resultFilterByGenre = [];
        for (let i = 0; i < data.length; i++) {
          const filterGenre = data[i].facts.genre;
      
          if (filterGenre === value) {
            resultFilterByGenre.push(data[i]);
          }
        }
        return resultFilterByGenre;
      }
      ---------------uso de for en studio
export const filterByStudio = (data, filterBy, value) => {
  if (filterBy === "studio") {
    const resultFilterByStudio = [];
    for (let i = 0; i < data.length; i++) {
      const filterStudio = data[i].facts.studio;
    
      if (filterStudio === value) {
        resultFilterByStudio.push(data[i]);
      }
    }
    return resultFilterByStudio;
  }
};*/
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
      if (valueA > valueB) {
        return -1;
      }
      return 1;
    }
  });

  console.log(copyData);
  return copyData;
};


//una función computeStats que tiene al menos un parámetro (data) y devuelve un valor computado 
export const fijaData = (data) => {
  for(let i = 0; i < data.length; i++){
    return fijaData;
  }
}



//una función sortBy que tiene 3 parámetros (data, sortBy, sortOrder) y devuelve el arreglo ordenado


