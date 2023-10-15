import { UPLOAD, UPLOADED, TRENDING, HOME, FAVORITES, ABOUT, CONTAINER_SELECTOR } from '../common/constants.js';
import { loadTrendingGif, loadGifDetails, loadSingleGif } from '../requests/request-service.js';
import { toAboutView } from '../views/about-view.js';
import { toHomeView } from '../views/home-view.js';
import { toTrendingView } from '../views/trending-view.js';
import { toFavoritesView } from '../views/favorite-view.js';
import { getFavorites } from '../data/favorites.js';
import { q, setActiveNav } from './helpers.js';
import { toUploadForm } from '../views/uploadForm-view.js';
import { getUploadedGifs } from '../data/uploadedGifs.js';
import { toUploadedGifsView } from '../views/uploadedGifs-view.js';




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
export const renderUpload = () => {
    q(CONTAINER_SELECTOR).innerHTML = toUploadForm();
}
const renderUploadedGifs = async () => {
    const uploadedGifs = getUploadedGifs();
    try {
        const gifs = await Promise.all(uploadedGifs.map(id => loadSingleGif(id)));
        q(CONTAINER_SELECTOR).innerHTML = toUploadedGifsView(gifs);
    } catch (error) {
        console.error(error.message)
    }
};

export const renderTrending = async () => {
    try {
        const trendingGIFs = await loadTrendingGif();
        q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trendingGIFs);
    } catch (error) {
        console.error(error.message);
    }
}
const renderFavorites = () => {

}

const renderHome = () => {
    q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderAbout = () => {
    q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

export const renderGifDetails = async (id = null) => {
    try {
        const gifDetails = await loadGifDetails(id);
        q(CONTAINER_SELECTOR).innerHTML = (gifDetails);

    } catch (error) {
        console.error(error);
    }

};