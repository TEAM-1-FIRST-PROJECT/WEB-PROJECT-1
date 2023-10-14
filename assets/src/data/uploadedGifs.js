let uploadedGifs = JSON.parse(localStorage.getItem('uploadedGifs')) || [];

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

export const getUploadedGifs = () => [...uploadedGifs];