/**
 * Renders an uploaded GIFs in the specified container.
 * @returns {void}
 */
export const toUploadedGifsView = (uploaded) => {
  const gifs = uploaded.map((gif) => `
    <div class="uploaded-gif">
      <img src="${gif.data.images.fixed_height.url}">
      <a href="#" class="uploaded" data-movie-id="${gif.data.id}">Add to Favorites</a>
    </div>
  `).join('');

    return `
      <div id="uploaded">
        <h1>Uploaded GIFs</h1>
        <div class="uploaded-gifs-container">
          ${gifs || '<p>Upload some GIF to see them here.</p>'} 
        </div>
      </div>
    `
};