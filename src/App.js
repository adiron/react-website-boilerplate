import React from 'react';

import {Router, Route, browserHistory} from 'react-router';
import DocumentTitle from 'react-document-title';

class Main extends React.Component {
  render() {
    return (
      <DocumentTitle title="Hello there!">
        <div className="content">
          This is the main content being rendered. Woo!
        </div>
      </DocumentTitle>
    )
  }
}

export class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Router history={browserHistory}>
          <Route path='/' component={Main}/>
        </Router>
      </div>
    )
  }
}

export default App;
