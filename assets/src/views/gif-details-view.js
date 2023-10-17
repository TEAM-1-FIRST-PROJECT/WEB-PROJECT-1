/**
 * Generates HTML markup for displaying the details of a GIF.
 * 
 * @param {object} gifDetails - An object containing details of a GIF.
 * @returns {string} - A string containing HTML markup representing the details view of a GIF.
 */

export const toGifDetailsView = (gifDetails) => `
  <div class="details-view">
    <img class="detail-img" src="${gifDetails.data.images.fixed_height.url}">
    <h1>User: ${gifDetails.data.username}</h1>
    <h2>Title: ${gifDetails.data.title}</h2>
    <h2>Rating: ${gifDetails.data.rating}</h2>
    <h2>Uploaded date & time: ${gifDetails.data.import_datetime}</h2>
    <h2>Trending date & time: ${gifDetails.data.trending_datetime}</h2>
  </div>
`;