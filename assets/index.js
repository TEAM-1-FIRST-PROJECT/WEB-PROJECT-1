import { HOME } from './src/common/constants.js';
import { q } from './src/events/helpers.js';
import { toggleFavoriteStatus } from './src/events/favorite-events.js';
import { renderTrending, renderUpload, loadPage, renderGifDetails } from './src/events/navigation-events.js';
import { renderSearchItems } from './src/events/search-events.js';
document.addEventListener('DOMContentLoaded', () => {

  // add global listener
  document.addEventListener('click', e => {

    // nav events
    if (e.target.classList.contains('nav-link')) {

      loadPage(e.target.getAttribute('data-page'));
    }

    // show category events
    if (e.target.classList.contains('view-trending-details-btn')) {
      debugger;
      console.log(e.target.getAttribute('data-trending-details-id'));
      renderGifDetails(e.target.getAttribute('data-trending-details-id'));
    }

    // show movie events
    if (e.target.classList.contains('view-movie-btn')) {
      renderUpload(e.target.getAttribute('data-movie-id'));
    }

    // toggle favorite event
    if (e.target.classList.contains('favorite')) {
      toggleFavoriteStatus(e.target.getAttribute('data-gif-id'));
    }

  });

  // search events
  q('input#search').addEventListener('input', e => {
    renderSearchItems(e.target.value);
  });

  // upload events
  document.getElementById('uploadForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData();
    const fileInput = document.getElementById('gifInput');
    formData.append('file', fileInput.files[0]);

    try {
      const response = await fetch('https://api.giphy.com/v1/gifs/upload?api_key=', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        document.getElementById('uploadStatus').innerHTML = `GIF uploaded successfully. ID: ${data.data.id}`;
      } else {
        throw new Error('Failed to upload GIF');
      }
    } catch (error) {
      console.error(error);
      document.getElementById('uploadStatus').innerHTML = 'Error uploading GIF';
    }
  });

  loadPage(HOME);

});