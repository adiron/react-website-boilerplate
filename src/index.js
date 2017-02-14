import "./style.scss";

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {App, Main} from './App';
import $ from 'jquery';

// Render the main component into the dom

$(function() {

  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Main} />
      </Route>
    </Router>), document.getElementById('root'));
});
