export const toTrendingView = (trending) => {
    const gifs = trending.data.map((gif) => `
    <div class="trending-gif">
      <img src="${gif.images.fixed_height.url}">
      <a href="#" class="favorite" data-movie-id="${gif.id}">Add to Favorites</a>
    </div>
  `).join('');
  
  return `
    <div id="trending">
      <h1>Trending GIFs</h1>
      <div class="trending-gifs-container">
        ${gifs}
      </div>
    </div>
  `
};