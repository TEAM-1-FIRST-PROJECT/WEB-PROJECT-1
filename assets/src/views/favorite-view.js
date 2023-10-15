export const toFavoritesView = () => `
<div id="favorites">
  <h1>Favorite gif's:</h1>
  <div class="content">
    ${movies.map(toMovieSimple).join('\n') || '<p>Add some movies to favorites to see them here.</p>'}
  </div>
  `;