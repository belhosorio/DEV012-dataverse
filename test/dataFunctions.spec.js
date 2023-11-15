import { filterByGenre, filterByYear, filterByStudio } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";
console.log(fakeData);

//----------------------------Filtro por genero---------------
describe("filterByGenre", () => {
  it("returns an array of movies by genre", () => {
    const genreByAdventure = filterByGenre(fakeData, "genre", "Aventura");
    expect(genreByAdventure.length).toBe(2);
  });
  it("returns 0 if the genre is not found", () => {
    const genreNotFound = filterByGenre(fakeData, "genre", "Ciencia Ficción");
    expect(genreNotFound).toBe(0);
  });
  it('returns 0 if Ciencia Ficción genre is not found', () => {
    const genreUndefined = filterByGenre(fakeData, 'Ciencia Ficción');
    expect(genreUndefined).toBe(0);
  });
});

describe("filterByStudio", () => {
  it("return an array of movies by studio", () => {
    const studioByGhibli = filterByStudio(fakeData, "studio", "Studio Ghibli");
    expect(studioByGhibli.length).toBe(1);
  });

  it("return zero array of movies by studio", () => {
    const studioNotGhibli = filterByStudio(
      fakeData,
      "studio",
      "Toei Animation"
    );
    expect(studioNotGhibli.length).toBe(0);
  });
});
//---------------------------Filtro por año----------------------
describe("filterByYear", () => {
  it("returns an array of movies by year", () => {
    const year = filterByYear(fakeData, "year", 1993);
    expect(year.length).toBe(1);
  });
});
