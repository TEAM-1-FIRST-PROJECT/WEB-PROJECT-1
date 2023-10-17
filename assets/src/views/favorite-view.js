import { renderFavoriteStatus } from '../events/favorite-events.js';

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
