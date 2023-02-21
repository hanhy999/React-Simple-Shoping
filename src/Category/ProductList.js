import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';
import { toast } from 'react-toastify';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/product')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  const addToCart = (product) => {
    // kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const existItem = cartItems.find((item) => item.id === product.id);
    if (existItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...existItem, quantity: existItem.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    toast.success('Đã thêm sản phẩm vào giỏ hàng', { autoClose: 1500 });
  };

  return (
    <div className="container">
      <div className="row">
        {products.map(product => (
          <div className="col-lg-4 mb-3" key={product.id}>
            <ProductItem product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;