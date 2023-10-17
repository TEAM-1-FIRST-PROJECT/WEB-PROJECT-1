const uploadedGifs = JSON.parse(localStorage.getItem('uploadedGifs')) || [];

/**
 * Adds a GIF to the list of uploaded GIFs.
 * @param {string} gifId - The ID of the GIF to be added.
 * */
export const addUploadedGifs = (gifId) => {
  if (uploadedGifs.find(id => id === gifId)) {
    // Gif has already been added to favorites
    return;
  }
  uploadedGifs.push(gifId);
  localStorage.setItem('uploadedGifs', JSON.stringify(uploadedGifs));
};

// export const removeFavorite = (movieId) => {
//   favorites = favorites.filter(id => id !== movieId);
//   localStorage.setItem('favorites', JSON.stringify(favorites));
// };

/**
 * Returns shallow copy array .
 * @return {[string]}
 */
export const getUploadedGifs = () => [...uploadedGifs];
