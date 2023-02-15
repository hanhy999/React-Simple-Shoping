
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductEdit = () => {
    const { productid } = useParams();

    useEffect(() => {
        fetch("http://localhost:8000/product/" + productid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            namechange(resp.name);
            imagechange(resp.imageURL);
            descriptionchange(resp.description);
            brandchange(resp.brand);
            pricechange(resp.price);
            sizechange(resp.size);
            quantitychange(resp.quantity);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [imageURL, imagechange] = useState("");
    const [description, descriptionchange] = useState("");
    const [brand, brandchange] = useState("");
    const [price, pricechange] = useState(0);
    const [size, sizechange] = useState(0);
    const [quantity, quantitychange] = useState(0);
    const [validation, valchange] = useState(false);

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const productdata = { id, name, imageURL, description, brand, price, size, quantity };


        fetch("http://localhost:8000/product/" + productid, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(productdata)
        }).then((res) => {
            alert('Saved successfully.')
            navigate('/listing');
        }).catch((err) => {
            console.log(err.message)
        })

    }
    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Product Edit</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={e => valchange(true)} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                            {name.
                                                length === 0 && validation &&
                                                <small className="text-danger">Please enter product name.</small>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Image</label>
                                            <input required value={imageURL} onMouseDown={e => valchange(true)} onChange={e => imagechange(e.target.value)} className="form-control"></input>
                                            {imageURL.length === 0 && validation &&
                                                <small className="text-danger">Please enter product image URL.</small>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea required value={description} onMouseDown={e => valchange(true)} onChange={e => descriptionchange(e.target.value)} className="form-control"></textarea>
                                            {description.length === 0 && validation &&
                                                <small className="text-danger">Please enter product description.</small>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Brand</label>
                                            <input required value={brand} onMouseDown={e => valchange(true)} onChange={e => brandchange(e.target.value)} className="form-control"></input>
                                            {brand.length === 0 && validation &&
                                                <small className="text-danger">Please enter product brand.</small>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Price</label>
                                            <input required type="number" value={price} onMouseDown={e => valchange(true)} onChange={e => pricechange(e.target.value)} className="form-control"></input>
                                            {price <= 0 && validation &&
                                                <small className="text-danger">Please enter a valid price.</small>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Size</label>
                                            <input required type="number" value={size} onMouseDown={e => valchange(true)} onChange={e => sizechange(e.target.value)} className="form-control"></input>
                                            {size <= 0 && validation &&
                                                <small className="text-danger">Please enter a valid size.</small>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Quantity</label>
                                            <input required type="number" value={quantity} onMouseDown={e => valchange(true)} onChange={e => quantity(e.target.value)} className="form-control"></input>
                                            {quantity <= 0 && validation &&
                                                <small className="text-danger">Please enter a valid quantity.</small>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/listing" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default ProductEdit;