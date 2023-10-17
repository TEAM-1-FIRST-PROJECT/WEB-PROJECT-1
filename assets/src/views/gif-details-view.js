/**
 * Generates HTML markup for displaying the details of a GIF.
 *
 * @param {object} gifDetails - An object containing details of a GIF.
 * @returns {string} - A string containing HTML markup representing the details view of a GIF.
 */

export const toGifDetailsView = (gifDetails) => `
  <div class="details-view">
    <img class="detail-img" src="${gifDetails.data.images.fixed_height.url}">
    <div class="details-view-text">
    <h1><span class="header-text">User:</span> ${gifDetails.data.username}</h1>
      <h2><span class="header-text">Title:</span> ${gifDetails.data.title}</h2>
      <h2><span class="header-text">Rating:</span> ${gifDetails.data.rating}</h2>
      <h2><span class="header-text">Uploaded date & time:</span> ${gifDetails.data.import_datetime}</h2>
      <h2><span class="header-text">Trending date & time:</span> ${gifDetails.data.trending_datetime}</h2>
    </div>
  </div>
`;
