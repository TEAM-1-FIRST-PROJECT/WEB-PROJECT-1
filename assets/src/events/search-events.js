import { loadSearchGif } from '../requests/request-service.js';
import { CONTAINER_SELECTOR } from '../common/constants.js';
import { toSearchView } from '../views/search-view.js';
import { q } from './helpers.js';

/**
  * Fetches GIFs related to the search term and updates the HTML content of a container element with the search results.
  * @param {string} searchTerm - The term to search for GIFs.
  * @returns {void}
  */
export const renderSearchItems = (searchTerm) => {
  loadSearchGif(searchTerm)
    .then(gifs => q(CONTAINER_SELECTOR).innerHTML = toSearchView(gifs.data, searchTerm));
};
