import { HOME } from './src/common/constants.js';
import { q } from './src/events/helpers.js';
import { toggleFavoriteStatus } from './src/events/favorite-events.js';
import { loadPage, renderGifDetails } from './src/events/navigation-events.js';
import { renderSearchItems } from './src/events/search-events.js';
import { uploadNewGif } from './src/requests/request-service.js';
import { renderFavorites } from './src/events/navigation-events.js';
document.addEventListener('DOMContentLoaded', () => {

  // add global listener
  document.addEventListener('click', e => {

    // nav events
    if (e.target.classList.contains('nav-link')) {
      loadPage(e.target.getAttribute('data-page'));
    }

    // show gif details
    if (e.target.classList.contains('view-trending-details-btn')) {
      renderGifDetails(e.target.getAttribute('data-trending-details-id'));
    }

    // upload events
    if (e.target.classList.contains('submit')) {
      uploadNewGif();
    }

    // toggle favorite event
    if (e.target.classList.contains('favorite')) {
      toggleFavoriteStatus(e.target.getAttribute('data-gif-id'));

      if (document.body.textContent.includes('Favorites GIFs')) {
        renderFavorites();
      }
    }

  });

  // search events
  q('input#search').addEventListener('input', e => {
    renderSearchItems(e.target.value);
  });

  loadPage(HOME);
});
