import { renderFavoriteStatus } from "../events/favorite-events.js";

export const toSearchView = (gifs, searchTerm) => `
<div id="search">
  <h1>GIFs found for "${searchTerm}":</h1>
  <div class="trending-gifs-container">
  ${gifs.map(toSearchSimple).join('\n') || '<p>Oops! No such GIF found!</p>'}
  </div>
</div>
`;

export const toSearchSimple = (gif) => `
<div class="image-container">
  <img src="${gif.images.fixed_height.url}">
  <div class="button-container">
  <button class="view-trending-details-btn" data-trending-details-id="${gif.id}">View Details</button>
  <button class="favorites-button">${renderFavoriteStatus(gif.id)}</button>
  
</div>
</div>
`;