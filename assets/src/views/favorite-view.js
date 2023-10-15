import { renderFavoriteStatus } from "../events/favorite-events.js";
import { toTrendingView } from "./trending-view.js";

// export const toFavoritesView = (gif) => `
// <div id="favorites">
//   <h1>Favorite gif's:</h1>
//   <div class="content">
//     ${gif.map(toTrendingView).join('\n') || '<p>Add some movies to favorites to see them here.</p>'}
//   </div>
//   `;


export const toFavoritesView = (favorites) => {

  const gifs = favorites.map((gif) => `
 
      <img src="${gif.data.images.fixed_height.url}">
      ${renderFavoriteStatus(gif.data.id)}
    </div>
    
  `).join('');

    return `
    
      <div id="favorites">
        <h1>Favorites GIFs</h1>
        <div class="content">
          ${gifs || '<p>Hearth some GIF to see them here.</p>'} 
        </div>
      </div>
    `
};