// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const EmpListing = () => {
//     const [empdata, empdatachange] = useState(null);
//     const navigate = useNavigate();

//     const LoadDetail = (id) => {
//         navigate("/employee/detail/" + id);
//     }
//     const LoadEdit = (id) => {
//         navigate("/employee/edit/" + id);
//     }
//     const Removefunction = (id) => {
//         if (window.confirm('Do you want to remove?')) {
//             fetch("http://localhost:8000/employee/" + id, {
//                 method: "DELETE"
//             }).then((res) => {
//                 alert('Removed successfully.')
//                 window.location.reload();
//             }).catch((err) => {
//                 console.log(err.message)
//             })
//         }
//     }




//     useEffect(() => {
//         fetch("http://localhost:8000/employee").then((res) => {
//             return res.json();
//         }).then((resp) => {
//             empdatachange(resp);
//         }).catch((err) => {
//             console.log(err.message);
//         })
//     }, [])
//     return (
//         <div className="container">
//             <div className="card">
//                 <div className="card-title">
//                     <h2>Employee Listing</h2>
//                 </div>
//                 <div className="card-body">
//                     <div className="divbtn">
//                         <Link to="employee/create" className="btn btn-success">Add New (+)</Link>
//                     </div>
//                     <table className="table table-bordered">
//                         <thead className="bg-dark text-white">
//                             <tr>
//                                 <td>ID</td>
//                                 <td>Name</td>
//                                 <td>Email</td>
//                                 <td>Phone</td>
//                                 <td>Action</td>
//                             </tr>
//                         </thead>
//                         <tbody>

//                             {empdata &&
//                                 empdata.map(item => (
//                                     <tr key={item.id}>
//                                         <td>{item.id}</td>
//                                         <td>{item.name}</td>
//                                         <td>{item.email}</td>
//                                         <td>{item.phone}</td>
//                                         <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
//                                             <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
//                                             <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
//                                         </td>
//                                     </tr>
//                                 ))
//                             }

//                         </tbody>

//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default EmpListing;

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductListing = () => {
    const [productData, productDataChange] = useState(null);
    const navigate = useNavigate();
    const LoadDetail = (id) => {
        navigate("/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove this product?')) {
            fetch("http://localhost:8000/product/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Product removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    useEffect(() => {
        fetch("http://localhost:8000/product").then((res) => {
            return res.json();
        }).then((resp) => {
            productDataChange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Product Listing</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Image</td>
                                <td>Description</td>
                                <td>Brand</td>
                                <td>Price</td>
                                <td>Size</td>
                                <td>Quantity</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {productData &&
                                productData.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        {/* <td>{item.image}</td> */}
                                        <td>
                                            <img src={item.imageURL} alt={item.name} />
                                        </td>
                                        <td>{item.description}</td>
                                        <td>{item.brand}</td>
                                        <td>{item.price}</td>
                                        <td>{item.size}</td>
                                        <td>{item.quantity}</td>
                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>

                                            <a onClick={() => LoadDetail(item.id)} className="btn btn-info">Detail</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductListing;