import { BASE_URL } from "../common/constants.js"
import { API_KEY } from "../common/constants.js"

export const UploadGif = () => {

}

export const loadUploadedGif = () => {

}

export const loadTrendingGif = async () => {

    const loadTrendingGifURL = `${BASE_URL}/trending?api_key=${API_KEY}`;
    const response = await fetch(loadTrendingGifURL)
    return response.json();
    
}

export const loadGifDetails = async (id) => {
try {
    const loadGifDetailsURL = `${BASE_URL}/gif_id=${id}?api_key=${API_KEY}`;
    const response = await fetch(loadGifDetailsURL);
    return response.json();
} catch (error) {
    console.error(error);
}
}

export const loadSearchGif = () => {

}