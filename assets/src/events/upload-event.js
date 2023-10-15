import { addUploadedGifs } from "../data/uploadedGifs.js";
import { UPLOAD_URL, API_KEY } from "../common/constants.js";

/**
 * Handles the submission of the upload form to upload a GIF.
 * @returns {void}
 */
export const uploadGif = () => { 
  document.getElementById('uploadForm').addEventListener('submit', async (event)=>{
    
    event.preventDefault();
    const formData = new FormData();
    const fileInput = document.getElementById('inputGif');
    formData.append('file', fileInput.files[0]);
    const url = UPLOAD_URL + API_KEY;
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });      
      if (response.ok) {
        const data = await response.json();
        document.getElementById('uploadForm').innerHTML = `GIF uploaded successfully. ID: ${data.data.id}`;
        addUploadedGifs(data.data.id);
      } else {
        document.getElementById('uploadForm').innerHTML = 'Failed to upload GIF';
      }
    } catch (error) {
      console.error(error);
      document.getElementById('uploadForm').innerHTML = 'Error uploading GIF';
    }
  });
};