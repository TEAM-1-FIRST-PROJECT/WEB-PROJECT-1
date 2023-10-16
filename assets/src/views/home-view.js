import { renderFavoriteStatus } from '../events/favorite-events.js';

export const toHomeView = (trending) => {
  const gifs = trending.data.map((gif) => `
  
  <div class="image-container">
    <img src="${gif.images.fixed_height.url}">
    <div class="button-container">
    <button class="view-trending-details-btn" data-trending-details-id="${gif.id}">Gif Details</button>
    ${renderFavoriteStatus(gif.id)}
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
