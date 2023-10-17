import { renderFavoriteStatus } from '../events/favorite-events.js';

/**
 * Generates HTML code to display favorite GIFs in a favorites view.
 * @param {Array} favorites - An array of favorite GIF objects.
 * @returns {string} - The HTML code for the favorites view.
 */
export const toFavoritesView = (favorites) => {
  const gifs = favorites.map((gif) => `
 
  <div class="image-container">
      <img src="${gif.data.images.fixed_height.url}">
      <div class="button-container">
      <button class="view-trending-details-btn" data-trending-details-id="${gif.data.id}">View Details</button>
      <button class="favorites-button">${renderFavoriteStatus(gif.data.id)}</button>
      </div>
    </div>
    
  `).join('');

  return `
    
      <div id="trending">
      <h1>Favorites GIFs</h1>
        <div class="trending-gifs-container">
          ${gifs || '<p>Heart some GIFs to see them here.</p>'} 
        </div>
      </div>
    `;
};
