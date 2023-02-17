import React, { useState } from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      image: 'https://via.placeholder.com/150',
      description: 'Description of product 1',
      brand: 'Brand 1',
      price: 10.99,
      size: 'Small',
      quantity: 5,
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://via.placeholder.com/150',
      description: 'Description of product 2',
      brand: 'Brand 2',
      price: 19.99,
      size: 'Medium',
      quantity: 10,
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/150',
      description: 'Description of product 3',
      brand: 'Brand 3',
      price: 29.99,
      size: 'Large',
      quantity: 15,
    },
  ]);

  return (
    <div>
      {products.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;