export const toTrendingView = () => {

}

ТОВА ТУК СЪЩО ТРЯБВА ДА СЕ ОПРАВИ КОГАТО СЕ НАПИШЕ HMTL-a НА ТАЗИ ФУНКЦИЯ

if (e.target.classList.contains(ТУК > 'view-category-btn')) {
 ТУК Е ОПРЕАВЕНО > renderTrending(+e.target.getAttribute(ТУК > 'data-category-id'));
}

ТОВА Е В index.js






// export const toCategoriesView = (categories) => `
// <div id="categories">
//   <h1>Categories</h1>
//   <div class="content">
//     ${categories.map(toSingleCategoryView).join('\n')}
//   </div>
// </div>
// `;

// const toSingleCategoryView = (category) => `
// <div class="category">
//   <h1>${category.name}</h1>
//   <p>${category.moviesCount} movies</p>
//   <button class="view-category-btn" data-category-id="${category.id}">View category</button>
// </div>
// `;