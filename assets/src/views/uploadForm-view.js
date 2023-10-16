/**
 * Renders an upload form in the specified container.
 * @returns {void}
 */
export const toUploadForm = () => `
  <form class="form" id="uploadForm">
  <p class="upload-form-message">upload form</p>
    <input class="input-text" type="text" id="inputGif-username" placeholder="user name"><br />
    <input class="input-text" type="text" id="inputGif-tags" placeholder="enter some tags comma separated"><br />
    <input class="input-text" type="file" accept=".gif" id="inputGif"><br />
    <button type="submit" class='submit'>Upload GIF</button>
  </form>
`;
