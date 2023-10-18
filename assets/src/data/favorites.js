let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

/**
 * Adds a GIF ID to the list of favorites.
 * 
 * @param {string} gifId - The ID of the GIF to be added to the favorites list.
 * @returns {void}
 */
export const addFavorite = (gifId) => {
  if (favorites.find(id => id === gifId)) {
    // Movie has already been added to favorites
    return;
  }

  favorites.push(gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};


/**
 * Removes a specified GIF ID from the favorites array and updates the localStorage with the updated favorites array.
 * 
 * @param {string} gifId - The ID of the GIF to be removed from the favorites array.
 * @returns {void} - This function does not return anything.
 */
export const removeFavorite = (gifId) => {

  favorites = favorites.filter(id => id !== gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
   * Returns a copy of the favorites array retrieved from the local storage.
   * If the favorites array is not found in the local storage, it defaults to an empty array.
   * 
   * @returns {Array} A new array that contains the same elements as the favorites array.
   * 
   * @example
   * const favorites = getFavorites();
   * console.log(favorites); // [item1, item2, item3]
   */
export const getFavorites = () => { return [...favorites]; };
