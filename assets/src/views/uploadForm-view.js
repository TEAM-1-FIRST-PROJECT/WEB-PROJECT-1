/**
 * Renders an upload form in the specified container.
 * @returns {void}
 */
export const toUploadForm = () => `
<div class="formDiv">
  <form class="form" id="uploadForm">
    <input type="file" accept=".gif" id="inputGif">
    <button type="submit" class='submit'>Upload GIF</button>
  </form>
</div>
`;
