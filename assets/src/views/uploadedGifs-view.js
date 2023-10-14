import { toGifDetailed } from "./gif-view";
export const toUploadedGifsView = (gifs) => `
<div id="gifs">
  <h1>Uploaded gifs:</h1>
  <div class="content">
    ${gifs.map(toGifDetailed).join('\n') || '<p>Upload some gifs to see them here.</p>'}
  </div>
</div>
`;