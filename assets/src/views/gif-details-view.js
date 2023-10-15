export const toGifDetailsView = (gifDetails) => `
<div>
  <div>
  <img src="${gifDetails.data.images.fixed_height.url}">
  <h1>Title: ${gifDetails.data.title}</h1>
  <h2>User: ${gifDetails.data.username}</h2>
  <h2>Rating: ${gifDetails.data.rating}</h2>
  </div>
</div>
`;