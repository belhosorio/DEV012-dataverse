export const renderItems = (data) => {
  console.log(data);
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  let showInHtml = "";
  data.forEach((items) => {
    showInHtml += `
<ul class="cards">
      <li class="itemContainer">
            <dl itemscope itemtype="PeliculasAnimacionJaponesa">
            <img src="${items.imageUrl}" alt="${items.name}"/>
            <dt></dt><dd itemprop="name">${items.name}</dd>
            <dt></dt><dd itemprop="shortDescription">${items.shortDescription}</dd>
            <dt>Año de estreno:</dt><dd itemprop="year">${items.facts.year}</dd>
            <dt></dt><dd itemprop="genre">${items.facts.genre}</dd>
            <dt></dt><dd itemprop="studio">${items.facts.studio}</dd>
          </dl>
        </li>
        </ul>
    `;
  });

  return `<ul class="cards">${showInHtml}</ul>`;
};
