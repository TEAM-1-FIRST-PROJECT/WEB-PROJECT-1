import { renderFavoriteStatus } from '../events/favorite-events.js';
/**
 * Renders an uploaded GIFs in the specified container.
 * @return {void}
 */
export const toUploadedGifsView = (uploaded) => {

  const gifs = uploaded.map((gif) => `
  
    <div class="uploaded-gif">
      <img src="${gif.data.images.fixed_height.url}">
      <button class="view-trending-details-btn" data-trending-details-id="${gif.data.id}">View Details</button>
      <button class="favorites-button">${renderFavoriteStatus(gif.data.id)}</button>
    </div>  
  `).join('');
  return `
      <div id="uploaded">
        <div class="uploaded-gifs-container">
          ${gifs || '<p class="upload-form-message">Upload some GIF to see them here.</p>'} 
        </div>
      </div>
    `;
};
