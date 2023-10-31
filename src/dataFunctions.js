
/*una función sortBy que tiene 3 parámetros (data, sortBy, sortOrder) y devuelve el arreglo ordenado
 una función filterBy que tiene 3 parámetros (data, filterBy, value) y devuelve el arreglo filtrado
 una función computeStats que tiene al menos un parámetro (data) y devuelve un valor computado */


// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.




















export const filterGenre = (data, filterBy, value) => {

if(filterBy === "genre"){
  const resultado = [];
  for(let i = 0; i < data.length; i++){
    const generoActual = data[i].facts.genre;
    if(generoActual ===  value){
      resultado.push(data[i])
    }
  }
  return resultado;
}

};

