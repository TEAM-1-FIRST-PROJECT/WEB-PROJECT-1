import { BASE_URL } from "../common/constants.js"
import { API_KEY } from "../common/constants.js"
import { uploadGif } from "../events/upload-event.js"

/**
 * Uploads a new GIF.
 * @returns {function} .
  */
export const uploadNewGif = () => {
    return uploadGif();
}

export const loadHomePage = async () => {
    const url = `${BASE_URL}/search?q=monday&api_key=${API_KEY}&limit=5` //`${BASE_URL}/${id}?api_key=${API_KEY}&rating=g`
    try {
        return (await fetch(url)).json();
    } catch (error) {
        console.error(error.message)
    }
}

/**
 * Loads a single GIF by its ID.
 * @param {string} id - The ID of the GIF.
 * @returns {Promise<Object>} A promise that resolves with the GIF data.
 * @throws {Error} If there is an error while fetching the GIF.
 */
export const loadSingleGif = async (id) => {
    const url = `${BASE_URL}/${id}?api_key=${API_KEY}&rating=g`
    try {
        return (await fetch(url)).json();
    } catch (error) {
        console.error(error.message)
    }
}

export const loadTrendingGif = async () => {

    try {
        const loadTrendingGifURL = `${BASE_URL}/trending?api_key=${API_KEY}`;
        const response = await fetch(loadTrendingGifURL)
        return response.json();
    } catch (error) {
        console.log(error.message);
    }

}

export const loadGifDetails = async (id) => {
    try {
        const loadGifDetailsURL = `${BASE_URL}/${id}?api_key=${API_KEY}`;
        const response = await fetch(loadGifDetailsURL);
        return response.json();
    } catch (error) {
        console.error(error);
    }
}

export const loadSearchGif = async (searchTerm) => {
    try {
        const loadSearchGifURL = `${BASE_URL}/search?q=${searchTerm}&api_key=${API_KEY}&limit=12`;
        const response = await fetch(loadSearchGifURL);
        return response.json();
    } catch (error) {
        console.log(error.message);
    }
}