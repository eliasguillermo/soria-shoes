import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/navigation/NavBar.js';
import ItemListContainer from '../components/home/ItemListContainer.js';
import About from '../components/about/About.js';
import Cart from '../components/cart/Cart.js';
import ItemDetailContainer from '../components/itemDetail/ItemDetailContainer.js';
import { CartContextProvider } from '../context/CartContext.js';
import CategoryContainer from '../components/categories/CategoryContainer.js';
import Checkout from '../components/checkout/Checkout.js';
import ScrollIntoView from "../components/navigation/ScrollIntoView.js";

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <Router>
          <ScrollIntoView>
            <NavBar />
            <Switch>
              <Route exact path="/" component={ItemListContainer} />
              <Route path="/about/" component={About} />
              <Route path="/cart/" component={Cart} />
              <Route path="/item/:id" component={ItemDetailContainer} />
              <Route path="/categories/:id" component={CategoryContainer} />
              <Route path="/checkout/" component={Checkout} />
              <Route component={Error} />
            </Switch>
          </ScrollIntoView>
        </Router>
      </div>
    </CartContextProvider>

  );
}

export default App;
