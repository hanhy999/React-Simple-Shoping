// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";


// const EmpDetail = () => {
//     const { empid } = useParams();

//     const [empdata, empdatachange] = useState({});

//     useEffect(() => {
//         fetch("http://localhost:8000/employee/" + empid).then((res) => {
//             return res.json();
//         }).then((resp) => {
//             empdatachange(resp);
//         }).catch((err) => {
//             console.log(err.message);
//         })
//     }, []);
//     return (
//         <div>
//             {/* <div className="row">
//                 <div className="offset-lg-3 col-lg-6"> */}

//                <div className="container">
                
//             <div className="card row" style={{ "textAlign": "left" }}>
//                 <div className="card-title">
//                     <h2>Employee Create</h2>
//                 </div>
//                 <div className="card-body"></div>

//                 {empdata &&
//                     <div>
//                         <h2>The Employee name is : <b>{empdata.name}</b>  ({empdata.id})</h2>
//                         <h3>Contact Details</h3>
//                         <h5>Email is : {empdata.email}</h5>
//                         <h5>Phone is : {empdata.phone}</h5>
//                         <Link className="btn btn-danger" to="/">Back to Listing</Link>
//                     </div>
//                 }
//             </div>
//             </div>
//             {/* </div>
//             </div> */}
//         </div >
//     );
// }

// export default EmpDetail;

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();

  const [productData, setProductData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/products/${productId}`)
      .then((res) => res.json())
      .then((resp) => {
        setProductData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container">
      <div className="card" style={{ textAlign: "left" }}>
        <div className="card-title">
          <h2>Product Detail</h2>
        </div>
        <div className="card-body">
          {productData && (
            <div>
              <h3>Name: <b>{productData.name}</b></h3>
              <img src={productData.image} alt={productData.name} />
              <p>Description: {productData.description}</p>
              <p>Brand: {productData.brand}</p>
              <p>Price: {productData.price}</p>
              <p>Size: {productData.size}</p>
              <p>Quantity: {productData.quantity}</p>
              <Link className="btn btn-danger" to="/">
                Back to Listing
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;