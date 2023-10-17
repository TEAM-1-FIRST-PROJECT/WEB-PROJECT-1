import { UPLOAD, UPLOADED, TRENDING, HOME, FAVORITES, ABOUT, CONTAINER_SELECTOR } from '../common/constants.js';
import { loadTrendingGif, loadGifDetails, loadSingleGif, loadHomePage } from '../requests/request-service.js';
import { toAboutView } from '../views/about-view.js';
import { toTrendingView } from '../views/trending-view.js';
import { toHomeView } from '../views/home-view.js';
import { toFavoritesView } from '../views/favorite-view.js';
import { getFavorites } from '../data/favorites.js';
import { q, setActiveNav } from './helpers.js';
import { toUploadForm } from '../views/upload-form-view.js';
import { getUploadedGifs } from '../data/uploadedGifs.js';
import { toUploadedGifsView } from '../views/uploaded-gifs-view.js';
import { toGifDetailsView } from '../views/gif-details-view.js';

/**
 * Loads and renders the specified page based on the provided page name.
 * @param {string} [page=''] - The name of the page to be loaded.
 * @return {void|null} Returns `void` if a valid page is loaded, otherwise `null`.
 */
export const loadPage = (page = '') => {

  switch (page) {

  case HOME:
    setActiveNav(HOME);
    return renderHome();

  case TRENDING:
    setActiveNav(TRENDING);
    return renderTrending();

  case FAVORITES:
    setActiveNav(FAVORITES);
    return renderFavorites();

  case UPLOAD:
    setActiveNav(UPLOAD);
    return renderUpload();

  case UPLOADED:
    setActiveNav(UPLOADED);
    return renderUploadedGifs();

  case ABOUT:
    setActiveNav(ABOUT);
    return renderAbout();
  default: return null;
  }
};

/**
 * Renders an upload form in the specified container.
 * @return {void}
 */
export const renderUpload = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadForm();
};


// eslint-disable-next-line valid-jsdoc
/**
 * Renders uploaded GIFs in the specified container.
 * @function
 * @async
 * @returns {<void>}
 * @throws {Error} If there is an error while rendering the GIFs.
 */
const renderUploadedGifs = async () => {
  /** @type {[string]} */
  const uploadedGifs = getUploadedGifs();
  try {
    /** @type {Promise<any>[]} */
    const gifs = await Promise.all(uploadedGifs.map(id => loadSingleGif(id)));

    q(CONTAINER_SELECTOR).innerHTML = toUploadedGifsView(gifs);
  } catch (error) {
    console.error(error.message);
  }
};

/**
 * Asynchronously renders a list of trending GIFs.
 * @async
 * @function
 * @throws {Error} Throws if there is an error while rendering the trending GIFs.
 */
export const renderTrending = async () => {
  try {
    const trendingGIFs = await loadTrendingGif();
    q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trendingGIFs);
  } catch (error) {
    console.error(error.message);
  }
};

/**
  * Renders the favorite GIFs on the webpage.
  * Retrieves the list of favorite GIFs, loads the details of each GIF using the `loadSingleGif` function,
  * and then generates the HTML markup for displaying the GIFs using the `toFavoritesView` function.
  * Finally, it updates the content of the container element on the webpage with the generated HTML.
  *
  * @return {void}
  */
export const renderFavorites = async () => {

  const favorites = getFavorites();

  try {
    const result = await Promise.all(favorites.map(id => loadSingleGif(id)));
    q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(result);
  } catch (error) {
    console.error(error);
  }
};

/**
 * Renders the home view of a GIF application.
 * Makes an asynchronous request to load random GIFs from the API,
 * and generates the HTML markup for displaying the GIFs on the home page.
 * The generated markup is inserted into the DOM to update the content of the container element.
 *
 * @example
 * renderHome();
 *
 * @return {void}
 */
export const renderHome = async () => {
  try {
    const randomGIFs = await loadHomePage();
    q(CONTAINER_SELECTOR).innerHTML = toHomeView(randomGIFs);
  } catch (error) {
    console.error(error.message);
  }
};


/**
  * Renders the about view in the application.
  *
  * @example
  * renderAbout();
  *
  * @return {void} - This function does not return any value.
  */
export const renderAbout = () => {

  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

/**
 * Renders the details of a GIF.
 *
 * @param {string} id - The ID of the GIF for which the details should be rendered. If no ID is provided, the function will attempt to load the details of a default GIF.
 * @returns {void} - None. The function updates the HTML content of a container element with the rendered GIF details.
 */

export const renderGifDetails = async (id = null) => {
  try {
    const gifDetails = await loadGifDetails(id);
    q(CONTAINER_SELECTOR).innerHTML = toGifDetailsView(gifDetails);

  } catch (error) {
    console.error(error);
  }
};

