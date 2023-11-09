import { filterByGenre, filterByYear } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';
console.log(fakeData);

//----------------------------Filtro por genero---------------
describe('filterByGenre', () => {

  it('returns an array of movies by genre', () => {
    const genreByAdventure = filterByGenre(fakeData,"genre", "Aventura")
    expect(genreByAdventure.length).toBe(2);
  });
});

//---------------------------Filtro por año----------------------
describe('filterByYear', () => {

  it('returns an array of movies by year', () => {
    const year = filterByYear(fakeData,"year", 1993)
    expect(year.length).toBe(1);
  });
});