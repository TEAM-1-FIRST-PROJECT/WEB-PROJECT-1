import { API_URL } from '../common/constants.js';

export const loadCategories = () => {
  
  return fetch(`${API_URL}/categories`)
    .then(response => response.json());
};

export const loadCategory = (id = null) => {
  
  return fetch(`${API_URL}/categories/${id}`)
    .then(response => response.json());
}

export const loadMovies = (categoryId = null) => {
  if (categoryId) {
    return fetch(`${API_URL}/categories/${categoryId}/movies`)
      .then(response => response.json());
  }

  return fetch(`${API_URL}/movies`)
    .then(response => response.json());
};

export const loadSingleMovie = (id) => {

  return fetch(`${API_URL}/movies/${id}`)
    .then(response => response.json()); 
};

export const loadSearchMovies = (searchTerm = '') => {

  return fetch(`${API_URL}/movies?search${searchTerm}`)
    .then(response => response.json());
};
