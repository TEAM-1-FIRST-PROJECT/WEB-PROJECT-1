export const toGifDetailed = (gif) => `
<div class="gif-detailed">
  <div class="gif-img">  
    <img src="${ur}">
  </div>
  <div class="gif-info">
    <p>Title: ${gif.title}</p>
    <p>user name: ${gif.username}</p>
      </div>
</div>
`;