import { UPLOAD, TRENDING, HOME, FAVORITES, ABOUT, CONTAINER_SELECTOR } from '../common/constants.js';
import { loadTrendingGif, loadGifDetails } from '../requests/request-service.js';
import { toAboutView } from '../views/about-view.js';
import { toHomeView } from '../views/home-view.js';
import { toTrendingView } from '../views/trending-view.js';
import { toFavoritesView } from '../views/favorite-view.js';
import { getFavorites } from '../data/favorites.js';
import { q, setActiveNav } from './helpers.js';
import { toGifDetailsView } from '../views/gif-details-view.js';





export const loadPage = (page = '') => {

    switch (page) {

        case HOME:
            setActiveNav(HOME);
            return renderHome();

        case TRENDING:
            setActiveNav(TRENDING);
            return renderTrending();

        case UPLOAD:
            setActiveNav(UPLOAD);
            return renderUpload();

        case FAVORITES:
            setActiveNav(FAVORITES);
            return renderFavorites();

        case ABOUT:
            setActiveNav(ABOUT);
            return renderAbout();

        default: return null; 
    }

};
export const renderUpload = () => {

}

export const renderTrending = async () => {
    try {
        const trendingGIFs = await loadTrendingGif();
        console.log(trendingGIFs);
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
        console.log(gifDetails);
        q(CONTAINER_SELECTOR).innerHTML = toGifDetailsView(gifDetails);
        
    } catch (error) {
        console.error(error);
    }
    
  };