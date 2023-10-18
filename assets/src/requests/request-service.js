/* eslint-disable consistent-return */
import { BASE_URL } from '../common/constants.js';
import { API_KEY } from '../common/constants.js';
import { uploadGif } from '../events/upload-event.js';

/**
 * Uploads a new GIF on Giphy server.
 * @return {function} .
  */
export const uploadNewGif = () => {
  return uploadGif();
};

/**
 * Loads a single GIF by its ID.
 * @param {string} id - The ID of the GIF.
 * @return {Promise<Object>} A promise that resolves with the GIF data.
 * @throws {Error} If there is an error while fetching the GIF.
 */
// eslint-disable-next-line consistent-return
export const loadSingleGif = async (id) => {
  const url = `${BASE_URL}/${id}?api_key=${API_KEY}&rating=g`;
  try {
    return (await fetch(url)).json();
  } catch (error) {
    console.error(error.message);
  }
};

/**
 * Asynchronously loads a list of trending GIFs from the Giphy API.
 * @async
 * @function
 * @return {Promise} A promise that resolves with the trending GIFs data.
 * @throws {Error} Throws if there is an error while fetching or parsing the response.
 */
export const loadTrendingGif = async () => {

  try {
    const loadTrendingGifURL = `${BASE_URL}/trending?api_key=${API_KEY}&limit=15`;
    const response = await fetch(loadTrendingGifURL);
    return response.json();
  } catch (error) {
    console.log(error.message);
  }

};

/**
 * Retrieves details of a GIF from the Giphy API.
 * @async
 * @function
 * @param {string} id - The ID of the GIF for which details need to be retrieved.
 * @return {Promise<object>} - The details of the GIF retrieved from the Giphy API.
 * @throws {Error} Throws if there is an error while fetching or parsing the response.
 */
export const loadGifDetails = async (id) => {
  try {
    const loadGifDetailsURL = `${BASE_URL}/${id}?api_key=${API_KEY}`;
    const response = await fetch(loadGifDetailsURL);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

/**
 * Asynchronously loads a list of GIFs from the Giphy API based on a search query.
 * @async
 * @function
 * @param {string} searchTerm The search query used to find GIFs.
 * @return {Promise} A promise that resolves with the GIFs data matching the search query.
 * @throws {Error} Throws if there is an error while fetching or parsing the response.
 */
export const loadSearchGif = async (searchTerm) => {
  try {
    const loadSearchGifURL = `${BASE_URL}/search?q=${searchTerm}&api_key=${API_KEY}&limit=15`;
    const response = await fetch(loadSearchGifURL);
    return response.json();
  } catch (error) {
    console.log(error.message);
  }
};
