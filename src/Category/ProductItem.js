import React from 'react';

const ProductItem = ({ product }) => {
  const { id, name, imageURL, description, brand, price, size, quantity } = product;

  return (
    <div className="product-item" style={{width:""}}>
      <div className="product-image">
        <img src={imageURL} alt={name} style={{width: "380px",height: "380px" , marginTop:"20px", marginBottom:"20px"}} />
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