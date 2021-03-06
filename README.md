# MyMaps Project

Final project for Udacity's Front End Course. Build a React App From Scratch. The App is supposed to have a list of Restaurants but I decided to do Breweries in Miami, Fl instead. Since Ya girl Loves Beer and craft beer is part of the Miami Scene!

The map is generated by the Google Maps API. The list of restaurants is generated by a call to the Foursquare API Search endpoint. A second API request is made when a location is clicked to get details about the Brewery, including address, phone, price point, user tip and an image as well. A link to the brewery's Foursquare page is also provided for more information for the user.

## Getting Started

* git clone https://github.com/MzLovelyj/frontend-neighborhood-map
* cd frontend-neighborhood-map
* install all project dependencies with `npm install`
* start the development server with `npm start`
* View **[Project](https://mzlovelyj.github.io/frontend-neighborhood-map/)**

## What You're Getting

```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── index.js # This is the root of your app. Contains static HTML right now.
    ├── apis
    │   ├── foursquare.js
    ├── components
    │   ├── App.js  
    │   ├── BeerSpots.js
    │   ├── ListView.js
    ├── data
    │   ├── credentials.js
    │   ├── mapStyles.js
    ├── images
    │   ├── beer-marker.png
    │   ├── beer-marker24.png
    │   ├── circles-loader.svg
    │   ├── foursquare-button.png
    │   ├── foursquare.png
    │   ├── no-image-available.png
    ├── utils
    │   ├── helpers.js
    ├── index.css # Global styles.
    ├── registerServiceWorker.js
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## How to Load the App in Production Mode

To run the app in production mode locally run:

```
npm run build
```

Navigate to the `build` directory and run a localhost server. If you have Python 2.x installed you can run the Python Simple Server like this.

```
python -m SimpleHTTPServer 8080
```

For Python 3.x, the command is:

```
-m http.server 8080
```

In either case navigate to [http://localhost:8080](http://localhost:8080) in your browser.

Or if you prefer you can use Node [serve](https://github.com/zeit/serve). If you do not have it installed you can install it with:

```
npm install -g serve
```

and then navigate into the build directory and run

```
serve -s
```

In this case the site will be hosted at [http://localhost:5000](http://localhost:5000)

## Adding required Foursquare and Google Maps credentials

The app will not run until you add Foursquare and Google Map keys to the project. They should be stored in the `credentials.js` file in the `data` folder.

### Foursquare

You can get the Foursquare API keys by signing up for a free personal account here:  **[Foursquare Developers Sign-up](https://foursquare.com/developers/signup)**

Log-in and click "Create a new app".  Paste the *Client ID* and *Client Secret* keys in `credentials.js`

### Google Maps

To get a Google Maps API key follow the directions here:  **[Google Maps:
Get API Key](https://developers.google.com/maps/documentation/javascript/get-api-key)**.

Choose the Maps platform and enable "Google Maps Platform". To protect your API from unwanted usage make sure you add an Allowed Referred (e.g. `localhost`) in the API console.

## How to Use the App

- The app will load displaying a map of Miami, Fl with Beer markers for each Brewery from the foursquare's API you will see the list of breweries on the sidebar
- Click on a beer marker or the name of the Brewery list to get more details about the brewery selected. 

### Resources and Documentation:

- [React API](https://facebook.github.io/react/docs/react-api.html) 
- [Styling Google Maps](https://developers.google.com/maps/documentation/javascript/styling)
- [stackoverflow: How to load the Google Maps API script in my React app](https://stackoverflow.com/questions/41709765/how-to-load-the-google-maps-api-script-in-my-react-app-only-when-it-is-require)
- [React-script-loader](https://www.npmjs.com/package/react-async-script-loader)
- [SVG-Loaders by Sam Herber](https://github.com/SamHerbert/SVG-Loaders)
- [CSS Tricks: Styling Texty Inputs](https://css-tricks.com/styling-texty-inputs-only/)
- [CSS Tricks: Custom Scrollbars in WebKit](https://css-tricks.com/custom-scrollbars-in-webkit/)
- [Foursquare API - Venue Search](https://developer.foursquare.com/docs/api/venues/search)
- [Foursquare API - Venue Details](https://developer.foursquare.com/docs/api/venues/details)
- [Beer favicon.ico](https://www.freefavicon.com/freefavicons/food/iconinfo/beer-152-270546.html)
- [Beer Map-Marker](https://www.iconfinder.com/icons/1463945/bar_beer_drink_location_map_pin_icon)
- [Map styling](http://www.mapstylr.com/map-style-editor/)

### Udacity Resources:

- [Project Rubric](https://review.udacity.com/#!/rubrics/1351/view)
- [Udacity CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html)
- [Udacity HTML Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)
- [Udacity JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
- [Udacity Responsive Web Design Fundamentals Course > Pattern - Off Canvas lesson](https://classroom.udacity.com/courses/ud893/lessons/3561069759/concepts/35307193050923)

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
