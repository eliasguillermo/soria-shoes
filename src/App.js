import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar'
import Home from './components/Home'
import ItemData from './components/ItemData.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import {CartContextProvider} from './components/CartContext.js'

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <Router>
          <NavBar color="primary" position="static" />
          <Switch>
            <Route exact path="/" >
              <Home greetings="Welcome to Soria's shoes" />
            </Route>
            <Route path="/products/" component={ItemData} />
            <Route path="/about/" component={About} />
            <Route path="/contact/" component={Contact} />
            <Route component={Error} />
          </Switch>
          {/* <Footer/> */}
        </Router>
      </div>
    </CartContextProvider>

  );
}

export default App;
