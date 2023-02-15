import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductListing = () => {
    const [productData, productDataChange] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(5);
    const navigate = useNavigate();
    const LoadDetail = (id) => {
        navigate("detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("edit/" + id);
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

    // Get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    let filteredProducts = productData;
    if (searchTerm) {
        filteredProducts = productData.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Search products
    const handleSearch = event => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Product Listing</h2>
                </div>
                <div className="card-body">
                    <div className="form-group search-form">
                        <input type="text" className="form-control" placeholder="Search products" value={searchTerm}
                            onChange={handleSearch} />
                    </div>
                    <div className="divbtn">
                        <Link to="create" className="btn btn-primary">Create Product</Link>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Description</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Size</th>
                                <th>Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentProducts &&
                                currentProducts.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>
                                            <img src={item.imageURL} alt="product" />
                                        </td>
                                        <td>{item.description}</td>
                                        <td>{item.brand}</td>
                                        <td>{item.price}</td>
                                        <td>{item.size}</td>
                                        <td>{item.quantity}</td>
                                        <td>
                                            <a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => LoadDetail(item.id)} className="btn btn-info">Detail</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="card-footer">
                    <Pagination productsPerPage={productsPerPage} totalProducts={filteredProducts.length} paginate={paginate} />
                </div>
            </div>
        </div>
    );
};

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) { pageNumbers.push(i); } return (<nav>
        <ul className="pagination">
            {pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <a onClick={() => paginate(number)} className="page-link">
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
    );
};