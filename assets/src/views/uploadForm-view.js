/**
 * Renders an upload form in the specified container.
 * @returns {void}
 */
export const toUploadForm = () => `
<div id="ab">
  <div class="co">
    <p class="upload-form-message">upload form</p>
    <form class="form" id="uploadForm">     
      <input class="input-text" type="text" id="inputGif-username" placeholder="user name"><br />
      <input class="input-text" type="text" id="inputGif-tags" placeholder="enter some tags comma separated"><br />
      
      <label for="file-upload" class="custom-file-upload">
      <i class="fa fa-upload" style="font-size:14px"></i>  choose file
        </label>
         <input id="file-upload" type="file"/><br />
         <input class="input-text" type="file" accept=".gif" id="inputGif"><br />
      <button type="submit" class='submit'>Upload GIF</button>
      
  </form> 
  </div>
</div>
  
`;
