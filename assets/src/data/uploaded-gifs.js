const uploadedGifs = JSON.parse(localStorage.getItem('uploadedGifs')) || [];

/**
 * Adds a GIF to the list of uploaded GIFs.
 * @param {string} gifId - The ID of the GIF to be added.
 * */
export const addUploadedGifs = (gifId) => {
  if (uploadedGifs.find(id => id === gifId)) {
    return;
  }

  uploadedGifs.push(gifId);
  localStorage.setItem('uploadedGifs', JSON.stringify(uploadedGifs));
};

/**
 * Returns shallow copy of stored GIFs.
 * @return {[string]}
 */
export const getUploadedGifs = () => [...uploadedGifs];
