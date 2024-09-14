import React, { useState } from 'react';
import { products as initialProducts } from './ProductData'; // we used as to make an alias , because we need the name products for our state
import Counter from './Counter/Counter';
import './style.css';

function Products() {
  const [products, setProducts] = useState(initialProducts); // Initialize state with the initial products

  
  const addProduct = () => {
    const newProduct = {
      name: 'New Product',
      img: 'https://via.placeholder.com/150', // Placeholder image URL
      price: '$99.99',
      description: 'This is a newly added product.',
    };

    // Update the products state with the new product
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <div className="products">
        {products.map((value, index) => (
          <div className="product" key={index}>
            <h1>name: {value.name}</h1>
            <img src={value.img} alt="product" />
            <h1>price: {value.price}</h1>
            <p>description: {value.description}</p>
            <Counter />
          </div>
        ))}
      </div>

      {/* Button to add a new product */}
      <button onClick={addProduct} className="add-product-btn">Add New Product</button>
    </div>
  );
}

export default Products;
