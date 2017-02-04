import React, { Component } from 'react';

import BookList from '../containers/booklist.js';
import BookDetail from '../containers/bookdetail.js';

export default class App extends Component {
  render() {
    return (
      <div className="app-container container-fluid">
        <div className="row">
          <div className="col-md-4">
            <BookList />
          </div>
          <div className="col-md-8 text-xs-center">
            <BookDetail />
          </div>
        </div>
      </div>
    );
  }
}
