import { EMPTY_HEART, FULL_HEART } from '../common/constants.js';
import { addFavorite, getFavorites, removeFavorite } from '../data/favorites.js';
import { q } from './helpers.js';

/**
 * Toggles the favorite status of a GIF.
 * 
 * @param {string} gifId - The ID of the GIF to toggle the favorite status for.
 * @returns {void} - The function does not return a value.
 */

export const toggleFavoriteStatus = (gifId) => {
  const favorites = getFavorites();
  const heartSpan = q(`span[data-gif-id="${gifId}"]`);
  console.log(q(`span[data-gif-id="${gifId}"]`));

  if (favorites.includes(gifId)) {
    removeFavorite(gifId);
    heartSpan.classList.remove('active')
    heartSpan.innerHTML = EMPTY_HEART;
  } else {
    addFavorite(gifId);
    heartSpan.classList.add('active');
    heartSpan.innerHTML = FULL_HEART;
  }
};

/**
 * Renders the favorite status of a GIF.
 * 
 * @param {string} gifId - The ID of the GIF for which the favorite status is being rendered.
 * @returns {string} A string representing the favorite status of the GIF, including the heart symbol and CSS class.
 *
 * @example
 * const gifId = '123';
 * const favoriteStatus = renderFavoriteStatus(gifId);
 * console.log(favoriteStatus);
 * // Output: <span class="favorite" data-gif-id="123">♡</span>
 */

export const renderFavoriteStatus = (gifId) => {
  const favorites = getFavorites();

  return favorites.includes(gifId)
    ? `<span class="favorite active" data-gif-id="${gifId}">${FULL_HEART}</span>`
    : `<span class="favorite" data-gif-id="${gifId}">${EMPTY_HEART}</span>`;
};

