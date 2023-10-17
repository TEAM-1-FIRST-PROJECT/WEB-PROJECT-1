import { renderFavoriteStatus } from '../events/favorite-events.js';

/**
 * Generates a HTML string representing the home view with the trending GIFs.
 *
 * @param {object} trending - An object containing an array of trending GIFs.
 *                            Each GIF object should have an `id` and an `images` property with a `fixed_height` property containing the URL of the GIF image.
 * @return {string} - A HTML string representing the home view with the trending GIFs.
 */
export const toHomeView = (trending) => {
  const gifs = trending.data.map((gif) => `
  <div class="image-container">
    <img src="${gif.images.fixed_height.url}">
    <div class="button-container">
    <button class="view-trending-details-btn" data-trending-details-id="${gif.id}">Learn More</button>
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
