import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList({ addToCart, searchQuery }) {  // Added searchQuery as a prop
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/products.json')  // Mock data from local file
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredProducts.map(product => (
          <div key={product.id} style={{ margin: '10px', padding: '10px', border: '1px solid black' }}>
            <img src={product.image} alt={product.name} width="100" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
