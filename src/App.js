import React from 'react';

import DocumentTitle from 'react-document-title';

export class Main extends React.Component {
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
        {this.props.children}
      </div>
    )
  }
}

export default App;
