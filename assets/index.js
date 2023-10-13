import { HOME } from './src/common/constants.js';
import { q } from './src/events/helpers.js';
import { toggleFavoriteStatus } from './src/events/favorite-events.js';
import { renderTrending, renderUpload, loadPage } from './src/events/navigation-events.js';
import { renderSearchItems } from './src/events/search-events.js';
document.addEventListener('DOMContentLoaded', () => {

  // add global listener
  document.addEventListener('click', e => {

    // nav events
    if (e.target.classList.contains('nav-link')) {

      loadPage(e.target.getAttribute('data-page'));
    }

    // show category events
    if (e.target.classList.contains('view-category-btn')) {
      renderTrending(+e.target.getAttribute('data-category-id'));
    }

    // show movie events
    if (e.target.classList.contains('view-movie-btn')) {
      renderUpload(+e.target.getAttribute('data-movie-id'));
    }

    // toggle favorite event
    if (e.target.classList.contains('favorite')) {
      toggleFavoriteStatus(+e.target.getAttribute('data-movie-id'));
    }

  });

  // search events
  q('input#search').addEventListener('input', e => {
    renderSearchItems(e.target.value);
  });

  loadPage(HOME);

});
