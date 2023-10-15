import { renderFavoriteStatus } from "../events/favorite-events.js";

export const toFavoritesView = (favorites) => {

  const gifs = favorites.map((gif) => `
 
      <img src="${gif.data.images.fixed_height.url}">
      ${renderFavoriteStatus(gif.data.id)}
    </div>
    
  `).join('');

    return `
    
      <div id="favorites">
        <div class="content">
          ${gifs || '<p>Hearth some GIF to see them here.</p>'} 
        </div>
      </div>
    `
};