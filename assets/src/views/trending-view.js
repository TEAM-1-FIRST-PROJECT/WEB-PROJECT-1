import { renderFavoriteStatus } from '../events/favorite-events.js';

/**
  * Generates HTML code representing the trending GIFs.
  *
  * @param {object} trending - An object containing an array of GIF data.
  * @returns {string} - A string of HTML code representing the trending GIFs.
  */

export const toTrendingView = (trending) => {
  const gifs = trending.data.map((gif) => `
    <div class="image-container">
      <img src="${gif.images.fixed_height.url}">
      <div class="button-container">
      <button class="view-trending-details-btn" data-trending-details-id="${gif.id}">View Details</button>
     <button class="favorites-button">${renderFavoriteStatus(gif.id)}</button>
      </div>
    </div>
  `).join('');

  return `
    <div id="trending">  
      <div class="trending-gifs-container">
      ${gifs}
      </div>
    </div>
  `;
};
