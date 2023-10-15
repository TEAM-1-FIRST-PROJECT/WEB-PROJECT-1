import { UPLOAD, UPLOADED, TRENDING, HOME, FAVORITES, ABOUT, CONTAINER_SELECTOR } from '../common/constants.js';
import { loadTrendingGif, loadGifDetails, loadSingleGif, loadHomePage } from '../requests/request-service.js';
import { toAboutView } from '../views/about-view.js';
import { toTrendingView } from '../views/trending-view.js';
import { toHomeView } from '../views/home-view.js';
import { toFavoritesView } from '../views/favorite-view.js';
import { getFavorites } from '../data/favorites.js';
import { q, setActiveNav } from './helpers.js';
import { toUploadForm } from '../views/uploadForm-view.js';
import { getUploadedGifs } from '../data/uploadedGifs.js';
import { toUploadedGifsView } from '../views/uploadedGifs-view.js';
import { toGifDetailsView } from '../views/gif-details-view.js';

/**
 * Loads and renders the specified page based on the provided page name.
 * @param {string} [page=''] - The name of the page to be loaded.
 * @returns {void|null} Returns `void` if a valid page is loaded, otherwise `null`.
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
 * @returns {void}
 */
export const renderUpload = () => {
    q(CONTAINER_SELECTOR).innerHTML = toUploadForm();
}

/**
 * Renders uploaded GIFs in the specified container.
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
        console.error(error.message)
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
}

const renderFavorites = async () => {
  
    const favorites = getFavorites();
    
    try {
        const result = await Promise.all(favorites.map(id => loadSingleGif(id)));
        q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(result)          ////////???????
    } catch (error) {
        console.error(error);
    }
}

const renderHome = async () => {
    try {
        const randomGIFs = await loadHomePage();
        q(CONTAINER_SELECTOR).innerHTML = toHomeView(randomGIFs)        
    } catch (error) {
console.error(error.message)
    }
};

const renderAbout = () => {
    q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

export const renderGifDetails = async (id = null) => {
    try {
        const gifDetails = await loadGifDetails(id);
        console.log(gifDetails);
        q(CONTAINER_SELECTOR).innerHTML = toGifDetailsView(gifDetails);

    } catch (error) {
        console.error(error);
    }

};