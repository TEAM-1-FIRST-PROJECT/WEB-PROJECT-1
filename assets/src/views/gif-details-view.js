export const toGifDetailsView = (gifDetails) => `
<div>
  <div>
  <h1>Title: ${gifDetails.data.title}</h1>
  <h2>User: ${gifDetails.data.username}</h2>
  <h2>Rating: ${gifDetails.data.rating}</h2>
  </div>
</div>
`;