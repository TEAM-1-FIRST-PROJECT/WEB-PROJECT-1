/**
 * Renders an upload form in the specified container.
 * @return {string}
 */
export const toUploadForm = () => {

  return `
<div id="outer-upload-form">
  <div class="upload-form">
    <p class="upload-form-message">Upload Form</p>
    <form class="form" id="uploadForm">     
      <input class="input-text" type="text" id="inputGif-username" placeholder="user name"><br />
      <input class="input-text" type="text" id="inputGif-tags" placeholder="enter some tags comma separated"><br />
      
      <label for="inputGif" class="fake-upload" id="fake-upload">
      <i class="upload" id='input-gif'  style="font-size:14px">  choose file</i>
      <input class="input-text" type="file" accept=".gif" id="inputGif"><br />
        </label>
         
         
         <br />
      <button type="submit" class='submit'>Upload GIF</button>
      
  </form> 
  </div>
</div>
  
`;
};
