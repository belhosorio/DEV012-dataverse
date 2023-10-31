/*una función sortBy que tiene 3 parámetros (data, sortBy, sortOrder) y devuelve el arreglo ordenado
 una función filterBy que tiene 3 parámetros (data, filterBy, value) y devuelve el arreglo filtrado
 una función computeStats que tiene al menos un parámetro (data) y devuelve un valor computado 

 Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
export const example = () => {
  return "example";
}; 
export const anotherExample = () => {
  return [];
};
*/

/*
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
*/


export const filterByStudio = (data, filterBy, value) => {
  if (filterBy === "studio") {
    const studiosToFilter = value.split(',').map(studio => studio.trim()); // Divide y limpia los estudios seleccionados
    const resultFilterByStudio = data.filter(item => {
      const movieStudios = item.facts.studio.split(',').map(studio => studio.trim()); // Divide y limpia los estudios de la película
      return studiosToFilter.some(selectedStudio => movieStudios.includes(selectedStudio));
    });
    return resultFilterByStudio;
  }
};

/*
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
};
*/

export const filterByGenre = (data, filterBy, value) => {
  if (filterBy === "genre") {
    const genreToFilter = value.split(',').map(genre => genre.trim()); // Divide y limpia los estudios seleccionados
    const resultFilterByGenre = data.filter(item => {
      const movieGenre = item.facts.genre.split(',').map(genre => genre.trim()); // Divide y limpia los estudios de la película
      return genreToFilter.some(selectedGenre => movieGenre.includes(selectedGenre));
    });
    return resultFilterByGenre;
  }
};


export const filterByYear = (data, filterBy, value) => {
  if (filterBy ==="year") {
    const resultFilterByYear = [];
    for (let i = 0; i < data.length; i++) {
      const filterYear = data[i].facts.year;
  
      if (Number(filterYear) === Number(value)) {
        resultFilterByYear.push(data[i]);
      }
    }
    return resultFilterByYear;
  }
};
