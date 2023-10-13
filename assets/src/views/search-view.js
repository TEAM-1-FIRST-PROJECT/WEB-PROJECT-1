export const toSearchView = (searchTerm) => `
<div id="movies">
  <h1>Movies found for "${searchTerm}":</h1>
  <div class="content">
    ${'<p>Add some movies to favorites to see them here.</p>'}
  </div>
</div>
`;

