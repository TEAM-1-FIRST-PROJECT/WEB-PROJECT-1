import { renderFavoriteStatus } from "../events/favorite-events.js";

/**
 * Generates HTML code to display the GIFs found for the search term.
 * If no GIFs are found, it displays an error message.
 *
 * @param {Array} gifs - An array of GIF objects.
 * @param {string} searchTerm - The search term used to find the GIFs.
 * @returns {string} - The generated HTML code representing the search view with the GIFs found for the search term.
 */
export const toSearchView = (gifs, searchTerm) => `
<div id="search">
  <h1>GIFs found for "${searchTerm}":</h1>
  <div class="trending-gifs-container">
  ${gifs.map(toSearchSimple).join('\n') || '<p>Oops! <br> No such GIF found!</p>'}
  </div>
</div>
`;

/**
 * Returns a string of HTML code representing a simplified view of the GIF.
 * The HTML code includes an image, buttons for viewing details and adding to favorites,
 * and uses the renderFavoriteStatus function to determine the favorite status of the GIF.
 *
 * @param {object} gif - The GIF object containing the necessary information for rendering the simplified view.
 *                       It should have an id property and an images property with a fixed_height property
 *                       that contains the URL of the GIF image.
 * @returns {string} - A string of HTML code representing the simplified view of the GIF.
 */
export const toSearchSimple = (gif) => `
<div class="image-container">
  <img src="${gif.images.fixed_height.url}">
  <div class="button-container">
  <button class="view-trending-details-btn" data-trending-details-id="${gif.id}">View Details</button>
  <button class="favorites-button">${renderFavoriteStatus(gif.id)}</button>
</div>
</div>
`;