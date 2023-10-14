export const uploadGif = () => { 
  console.log('uploading out');
  document.getElementById('uploadForm').addEventListener('submit', async (event)=>{
    console.log('uploading in');
    event.preventDefault();

    const formData = new FormData();
    const fileInput = document.getElementById('inputGif');
    formData.append('file', fileInput.files[0]);
    const url = 'https://api.giphy.com/v1/gifs/upload?api_key=7vv6tDTalN9b6qJzUPnOQpz98o3Rnrgp'
  ;
    
console.log(formData)
    //try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

    //   if (response.ok) {
    //     const data = await response.json();
    //     document.getElementById('uploadStatus').innerHTML = `GIF uploaded successfully. ID: ${data.data.id}`;
    //   } else {
    //     throw new Error('Failed to upload GIF');
    //   }
    // } catch (error) {
    //   console.error(error);
    //   document.getElementById('uploadStatus').innerHTML = 'Error uploading GIF';
    // }
  });
};