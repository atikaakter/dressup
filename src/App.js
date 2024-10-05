import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './ProductList';
import Cart from './Cart';
import Search from './Search';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');  // You already have this state

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Products</Link> | <Link to="/cart">Cart ({cartItems.length})</Link>
        </nav>
        <Search setSearchQuery={setSearchQuery} /> {/* Search functionality */}

        <Routes>
          {/* Pass searchQuery to ProductList */}
          <Route path="/" element={<ProductList addToCart={addToCart} searchQuery={searchQuery} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
