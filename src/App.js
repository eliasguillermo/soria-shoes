import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Cart from './components/Cart.js'
import ItemDetailContainer from './components/ItemDetailContainer.js'
import {CartContextProvider} from './components/context/CartContext.js'
import CategoryContainer from './components/CategoryContainer.js'
import Checkout from './components/Checkout.js'

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <Router>
          <NavBar color="primary" position="static" />
          <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route path="/about/" component={About} />
            <Route path="/contact/" component={Contact} />
            <Route path="/cart/" component={Cart} />
            <Route path="/item/:id" component={ItemDetailContainer} />
            <Route path="/categories/:id" component={CategoryContainer} />
            <Route path="/checkout/" component={Checkout} />
            <Route component={Error} />
          </Switch>
          {/* <Footer/> */}
        </Router>
      </div>
    </CartContextProvider>

  );
}

export default App;
