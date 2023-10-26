
export const renderItems = (data) => {
  console.log(data);
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  let showInHtml = "";
  data.forEach((items) => {
    showInHtml += `
<ul class="cards">
      <li class="itemContainer">
            <dl itemscope itemtype="PeliculasAnimacionJaponesa">
            <img src="${items.imageUrl}" alt="" />
            <dt>Nombre:</dt><dd itemprop="name">${items.name}</dd>
            <dt>Descripción:</dt><dd itemprop="shortDescription">${items.shortDescription}</dd>
            <dt>Año:</dt><dd itemprop="shortDescription">${items.facts.year}</dd>
            <dt>Genero:</dt><dd itemprop="shortDescription">${items.facts.genre}</dd>
            <dt>Estudio de animación:</dt><dd itemprop="shortDescription">${items.facts.studio}</dd>
          </dl>
        </li>
        </ul>
    `;
  });

  return `<ul class="cards">${showInHtml}</ul>`;
};
