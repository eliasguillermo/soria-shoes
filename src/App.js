import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar'
import Home from './components/Home'
import Products from './components/Products.js'
import About from './components/About.js'
import Contact from './components/Contact.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar color="primary" position="static" />
          <Switch>
            <Route exact path="/" render={() => (<Home greetings="Welcome to Soria's shoes" />)} />
            <Route path="/products/" component={Products} />
            <Route path="/about/" component={About} />
            <Route path="/contact/" component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  } 
}

export default App;
