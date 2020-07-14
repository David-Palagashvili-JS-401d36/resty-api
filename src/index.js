import React from 'react';
import ReactDOM from 'react-dom';
// import the central component which sets the root or base of our React App
import App from './app.js';

// attach the component to the DOM
const rootElement = document.getElementById('root');

ReactDOM.render(<App/>, rootElement);