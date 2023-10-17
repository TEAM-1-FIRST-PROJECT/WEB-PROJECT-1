/**
 * Renders an upload form in the specified container.
 * @returns {void}
 */
export const toUploadForm = () => `
<div id="outer-upload-form">
  <div class="upload-form">
    <p class="upload-form-message">upload form</p>
    <form class="form" id="uploadForm">     
      <input class="input-text" type="text" id="inputGif-username" placeholder="user name"><br />
      <input class="input-text" type="text" id="inputGif-tags" placeholder="enter some tags comma separated"><br />
      
      <label for="inputGif" class="fake-upload">
      <i class="fa-fa-upload" style="font-size:14px"></i>  choose file
      <input class="input-text" type="file" accept=".gif" id="inputGif"><br />
        </label>
         
         
         <input id="file-upload" type="file"/><br />
      <button type="submit" class='submit'>Upload GIF</button>
      
  </form> 
  </div>
</div>
  
`;
