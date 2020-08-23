import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavBar color="primary" position="static" />
        </div>
        <div class="App-header">
          <Home greetings="Welcome to Soria's shoes!" />
        </div>
      </div>
    );
  }
}

export default App;
