import { toTrendingView } from "./trending-view.js";

export const toFavoritesView = (gif) => `
<div id="favorites">
  <h1>Favorite gif's:</h1>
  <div class="content">
    ${gif.map(toTrendingView).join('\n') || '<p>Add some movies to favorites to see them here.</p>'}
  </div>
  `;