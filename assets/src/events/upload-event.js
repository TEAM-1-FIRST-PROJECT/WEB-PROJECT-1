import { addUploadedGifs } from '../data/uploadedGifs.js';
import { UPLOAD_URL, API_KEY } from '../common/constants.js';

/**
 * Handles the submission of the upload form to upload a GIF.
 * @return {void}
 */
export const uploadGif = () => {
  document.getElementById('uploadForm').addEventListener('submit', async (event) => {

    event.preventDefault();
    const formData = new FormData();
    const fileInput = document.getElementById('inputGif');
    const username = document.getElementById('inputGif-username').value;
    const tags = document.getElementById('inputGif-tags').value.trim();
    formData.append('file', fileInput.files[0]);
    //const url = `${UPLOAD_URL}${API_KEY}&username=${username}&tags=${tags}`;
    const url = `${UPLOAD_URL}${API_KEY}&username=${username}&tags=${tags}`;
    //const url = UPLOAD_URL + API_KEY;
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
