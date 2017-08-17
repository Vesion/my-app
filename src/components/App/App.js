import React, { Component } from 'react';
import {view as Header} from '../Header';
import {view as Body} from '../Body';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;
