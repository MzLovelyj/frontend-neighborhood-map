# MyMaps Project

Final project for Udacity's Front End Course. Build a Rect App From Scratch. 

## Getting Started

* git clone https://github.com/MzLovelyj/frontend-neighborhood-map
* cd frontend-neighborhood-map
* install all project dependencies with `npm install`
* start the development server with `npm start`

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
    │   ├── foursquare-button.png
    │   ├── foursquare.png
    │   ├── no-image-available.png
    ├── utils
    │   ├── helpers.js
    ├── index.css # Global styles.
    ├── serviceWorker.js
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

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
