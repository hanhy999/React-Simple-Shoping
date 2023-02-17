import React from 'react';

const ProductItem = ({ product }) => {
  const { id, name, image, description, brand, price, size, quantity } = product;

  return (
    <div className="product-item" style={{width:"30%"}}>
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Brand: {brand}</p>
        <p>Price: {price}</p>
        <p>Size: {size}</p>
        <p>Quantity: {quantity}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;