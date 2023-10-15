export const toTrendingView = (trending) => `
<div id="trending">
  <h1>Trending Gifts</h1>
  <div>${trending.data.map(toSingleTrendingGIFView).join('\n')}</div>
</div>
`;

const toSingleTrendingGIFView = (gif) => `
<div>
<h1>${gif.title}</h1>
<h2>${gif.id}</h2>
<button class="view-trending-details-btn" data-trending-details-id="${gif.id}">Gif Details</button>
</div>
`;