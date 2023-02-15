import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productid } = useParams();

  const [productdata, productdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/product/" + productid).then((res) => {
      return res.json();
    }).then((resp) => {
      productdatachange(resp);
    }).catch((err) => {
      console.log(err.message);
    })
  }, []);

  return (
    <div>
      <div className="container">
        <div className="card" style={{ "textAlign": "left" }}>
          <div className="card-title">
            <h2>Product Detail</h2>
          </div>
          <div className="card-body"></div>

          {productdata &&
            <div>
              <h3>Name: <b>{productdata.name}</b></h3>
              <img src={productdata.imageURL} />
              <p>Description: {productdata.description}</p>
              <p>Brand: {productdata.brand}</p>
              <p>Price: {productdata.price}$</p>
              <p>Size: {productdata.size}</p>
              <p>Quantity: {productdata.quantity}</p>
              <Link className="btn btn-danger" to="/listing">
                Back to Listing
              </Link>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;