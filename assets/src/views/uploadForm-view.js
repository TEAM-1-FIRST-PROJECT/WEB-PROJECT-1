/**
 * Renders an upload form in the specified container.
 * @returns {void}
 */
export const toUploadForm = () => `
<div class="formDiv">
  <form class="form" id="uploadForm">
    <input class="text" type="file" accept=".gif" id="inputGif">
    <input class="text" type="text" id="inputGif-username" placeholder="user name">
    <input class="text" type="text" id="inputGif-username" placeholder="tags...">
    <button type="submit" class='submit'>Upload GIF</button>
  </form>
</div>
`;
