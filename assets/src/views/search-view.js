import { renderFavoriteStatus } from "../events/favorite-events.js";

export const toSearchView = (gifs, searchTerm) => `
<div id="search">
  <h1>GIFs found for "${searchTerm}":</h1>
  <div class="content">
  ${gifs.map(toSearchSimple).join('\n') || '<p>Oops! No such GIF found!</p>'}
  </div>
</div>
`;

export const toSearchSimple = (gif) => `
<div class="searched-gif-result">
<div class="content">
  <img src="${gif.images.fixed_height.url}">
  <button class="view-trending-details-btn" data-trending-details-id="${gif.id}">Gif Details</button>
  ${renderFavoriteStatus(gif.id)}
</div>
</div>
`;