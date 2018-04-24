import React, { Component } from 'react';
import Bic from './view/Bic';
import Home from './view/Home';
import {BrowserRouter, Route} from 'react-router-dom';
import PageTransition from 'react-router-page-transition';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Home />
            </div>
          )}/>
          <Route exact={true} path='/bic' render={() => (
            <div className="App">
              <Bic />
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

