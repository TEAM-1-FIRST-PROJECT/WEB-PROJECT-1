import { addUploadedGifs } from "../data/uploadedGifs.js";

export const uploadGif = () => { 
  console.log('uploading out');
  document.getElementById('uploadForm').addEventListener('submit', async (event)=>{
    
    event.preventDefault();

    const formData = new FormData();
    const fileInput = document.getElementById('inputGif');
    formData.append('file', fileInput.files[0]);
    const url = 'https://upload.giphy.com/v1/gifs?api_key=7vv6tDTalN9b6qJzUPnOQpz98o3Rnrgp';
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        const data = await response.json();console.log(data);
        document.getElementById('uploadForm').innerHTML = `GIF uploaded successfully. ID: ${data.data.id}`;
        addUploadedGifs(data.data.id);
      } else {
        throw new Error('Failed to upload GIF');
      }
    } catch (error) {
      console.error(error);
      document.getElementById('uploadStatus').innerHTML = 'Error uploading GIF';
    }
  });
};