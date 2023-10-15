import { HOME } from './src/common/constants.js';
import { q } from './src/events/helpers.js';
import { toggleFavoriteStatus } from './src/events/favorite-events.js';
import { renderTrending, renderUpload, loadPage, renderGifDetails } from './src/events/navigation-events.js';
import { renderSearchItems } from './src/events/search-events.js';
import { uploadNewGif } from './src/requests/request-service.js';
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

    // upload events
    if (e.target.classList.contains('submit')) {
      uploadNewGif();
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

  loadPage(HOME);
});
