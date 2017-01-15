import React, { Component } from 'react';
import './resources/css/App.css';

import Login from './public/Login';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className ="NavBar">
          <div className="BreadTitle">(bread)</div>
        </div>
        <Login></Login>
      </div>
    );
  }

}

export default App;
