import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
            <Routes>
              <Route exact path="/" element={<ItemListContainer />} />
              <Route path="/about/" element={<About />} />
              <Route path="/cart/" element={<Cart />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/categories/:id" element={<CategoryContainer />} />
              <Route path="/checkout/" element={<Checkout />} />
              <Route path="*" element={<div className="Page-message">Page not found</div>} />
            </Routes>
          </ScrollIntoView>
        </Router>
      </div>
    </CartContextProvider>

  );
}

export default App;
