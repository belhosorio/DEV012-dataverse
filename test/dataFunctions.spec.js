import { filterByGenre, filterByYear } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";
console.log(fakeData);

//----------------------------Filtro por genero---------------
describe("filterByGenre", () => {
  it("returns an array of movies by genre", () => {
    const genreByAdventure = filterByGenre(fakeData, "genre", "Aventura");
    expect(genreByAdventure.length).toBe(2);
  });
  it("returns null if the genre is not found", () => {
    const genreNotFound = filterByGenre(fakeData, "genre", "Ciencia Ficción");
    expect(genreNotFound).toBeNull();
  });
  it('returns undefined if Ciencia Ficción genre is not found', () => {
    const genreUndefined = filterByGenre(fakeData, 'Ciencia Ficción');
    expect(genreUndefined).toBeUndefined();
  });
});

//---------------------------Filtro por año----------------------
describe("filterByYear", () => {
  it("returns an array of movies by year", () => {
    const year = filterByYear(fakeData, "year", 1993);
    expect(year.length).toBe(1);
  });
});
