import { filterByGenre, filterByStudio } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";

//filtro por Genero
describe("filterByGenre", () => {
  it("returns an array of movies by genre", () => {
    const genreByAdventure = filterByGenre(fakeData, "genre", "Aventura");
    expect(genreByAdventure.length).toBe(2);
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
