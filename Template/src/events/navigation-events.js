import { ABOUT, CATEGORIES, CONTAINER_SELECTOR, FAVORITES, HOME } from '../common/constants.js';
import { loadCategories, loadCategory, loadMovies, loadSingleMovie } from '../requests/request-service.js';
import { toAboutView } from '../views/about-view.js';
import { toCategoriesView } from '../views/category-view.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { toHomeView } from '../views/home-view.js';
import { toMoviesFromCategoryView, toSingleMovieView } from '../views/movie-views.js';
import { q, setActiveNav } from './helpers.js';
import { getFavorites } from '../data/favorites.js';

// public API
export const loadPage = (page = '') => {

  switch (page) {

    case HOME:
      setActiveNav(HOME);
      return renderHome();

    case CATEGORIES:
      setActiveNav(CATEGORIES);
      return renderCategories();

    case FAVORITES:
      setActiveNav(FAVORITES);
      return renderFavorites();

    case ABOUT:
      setActiveNav(ABOUT);
      return renderAbout();

    /* if the app supports error login, use default to log mapping errors */
    default: return null;
  }

};

export const renderMovieDetails = (id = null) => {
  loadSingleMovie(id)
    .then(movie => q(CONTAINER_SELECTOR).innerHTML = toSingleMovieView(movie));
};

export const renderCategory = (categoryId = null) => {

  Promise.all([loadCategory(categoryId), loadMovies(categoryId)])
    .then(([category, movies]) => q(CONTAINER_SELECTOR).innerHTML = toMoviesFromCategoryView(category, movies));
};

// private functions

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderCategories = () => {
  loadCategories()
    .then(categories => q(CONTAINER_SELECTOR).innerHTML = toCategoriesView(categories));
};

const renderFavorites = () => {
  const favorites = getFavorites();
  Promise.all(favorites.map(id => loadSingleMovie(id)))
    .then(movies => q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(movies));
};

const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};
