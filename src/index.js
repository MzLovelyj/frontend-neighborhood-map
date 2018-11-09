import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/App";
import * as serviceWorker from './serviceWorker';
//Load our new Envirmoment  variables for the .env file in dev
//this is for Dev only, but in production it just doesn't do anything
require('dotenv').config();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
