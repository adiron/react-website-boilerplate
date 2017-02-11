import "./style.scss";

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery';

// Render the main component into the dom

$(function() {
  ReactDOM.render(<App />, document.getElementById('root'));
})
