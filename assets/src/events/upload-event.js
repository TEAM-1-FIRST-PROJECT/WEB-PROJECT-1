import { addUploadedGifs } from '../data/uploadedGifs.js';
import { UPLOAD_URL, API_KEY } from '../common/constants.js';
import { HELPER_GIF } from '../common/constants.js';
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
    const url = `${UPLOAD_URL}${API_KEY}&username=${username}&tags=${tags}`;

    document.getElementById('uploadForm').innerHTML = `<img src="${HELPER_GIF}" alt="Description" class="helper-gif">`;

    formData.append('file', fileInput.files[0]);
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        document.getElementById('uploadForm').innerHTML = `<p class="upload-form-message">GIF uploaded successfully.`;
        addUploadedGifs(data.data.id);
      } else {
        document.getElementById('uploadForm').innerHTML = `<p class="upload-form-message">Failed to upload GIF.</p>`;
      }
    } catch (error) {
      console.error(error);
      document.getElementById('uploadForm').innerHTML = '<p class="upload-form-message">Error uploading GIF.</p>';
    }
  });
};

