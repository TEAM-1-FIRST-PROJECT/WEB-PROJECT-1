import { BASE_URL } from "../common/constants.js"
import { API_KEY } from "../common/constants.js"
import { uploadGif } from "../events/upload-event.js"

export const uploadNewGif = () => {
return uploadGif();
}

export const loadUploadedGif = () => {

}

export const loadSingleGif = (id) =>{
return getGifById(id);
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
        const loadGifDetailsURL = `${BASE_URL}/gif_id=${id}?api_key=${API_KEY}`;
        const response = await fetch(loadGifDetailsURL);
        return response.json();
    } catch (error) {
        console.error(error);
    }
}

export const loadSearchGif = () => {

}