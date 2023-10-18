# GiFTeresT

GiFTeresT is a modern and interactive website designed for everyone who loves to share on point GIFs with friends. Below are the core functionalities of the website:

## Project structure

- `styles` - contains the CSS files included in the app
- `src` - where the app's JavaScript code lives, inside you can find
  - `common/constants.js` - `common` holds resources used by other files, such resources are the constants in `constants.js`.
  - `data` - holds the **data layer** of the app. In this folder you can find:
    - `favorites.js` - the module responsible for adding and removing GIFs from favorites.
    - `uploaded-gifs.js` - the module responsible for adding GIFs to uploaded.
  - `events` - holds the core app logic. Event listeners in `index.js` use directly functions exposed in the `events` folder files. Inside the folder you can find:
    - `favorites-events.js` - holds the logic which is responsible to react to the heart icon - switch the **favorite** status of a GIF, i.e. add it to favorites or remove it.
    - `helpers.js` - contains helpers methods including aliasing for `document.querySelector` and `document.querySelectorAll`
    - `navigation-events.js` is related to navigation events such as clicking on nav links (Home, Trending, etc.), buttons to show more of a GIF.
    - `search-events.js` is related to the searchbox and the search functionality
  - `requests-service.js` file serves as the bridge between our application and the external Giphy API, allowing us to perform various operations with GIF data. Here's a brief explanation of each function in this service file:
    - `uploadNewGif` This function is used to upload a new GIF to our application.
    - `loadHomePage` It loads a collection of GIFs based on the current day of the week.
    - `loadSingleGif` Loads a single GIF by its ID.
    - `loadTrendingGif` Asynchronously retrieves a list of trending GIFs from the Giphy API.
    - `loadGifDetails` Fetches details of a specific GIF from the Giphy API based on its ID.
    - `loadSearchGif` Loads a list of GIFs from the Giphy API based on a search query.
  - `views` is the folder containing the view **templates**. **Templates** are partial html files which can have placeholders for data as well. Example of a view: `<p>This article has ${article.viewCount} views.</p>`. You can explore the files in the folder - they contain functions mapping data to (and returning) template views:
    - `about-view.js` 
    - `favorites-view.js` 
    - `gif-details-view.js`
    - `home-view.js`
    - `search-view.js`
    - `trending-view.js`
    - `upload-form-view.js`
    - `uploaded-gifs-view.js`

<br>

## Functionalities

### Home Page
- Discover top GIFs curated for each day of the week.
- Explore additional details about a selected GIF and add it to your favorites list.

### Trending GIFs
- Dive into the freshest and most popular GIFs sourced from the Giphy website using the Giphy API.
- Keep yourself in the loop with the trendiest and most viral GIFs around.

### Favorites
- Mark your favorite GIFs for quick access.
- Create a personalized collection of GIFs you love.

### Search GIFs
- Search for GIFs by entering keywords or phrases.
- Discover GIFs that match your interests and exact mood.

### GIF Details
- View detailed information about a selected GIF.
- Access data such as the GIF's uploader, GIF's title, rating, and more.

### Upload Your GIFs
- Share your own GIF creations with the world.
- Easily upload GIFs and make them accessible to other users.

### About
- Learn more about the GiFTeresT project and its creators.

### User-Friendly Interface
- GiFTeresT has a simple and attractive design.
- Easily explore all features with no hassle.