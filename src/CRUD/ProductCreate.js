import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductCreate = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    // const [image, setImage] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [description, setDescription] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [size, setSize] = useState("");
    const [quantity, setQuantity] = useState("");
    const [validation, setValidation] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const productData = {
            name,
            // image,
            imageURL,
            description,
            brand,
            price,
            size,
            quantity,
        };

        fetch("http://localhost:8000/product", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(productData),
        })
            .then((res) => {
                alert("Product saved successfully.");
                navigate("/listing");
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handleSubmit}>
                    <div className="card" style={{ "textAlign": "left" }}>
                        <div className="card-title">
                            <h2>Product Create</h2>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input
                                            value={id}
                                            disabled="disabled"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            required
                                            value={name}
                                            onMouseDown={(e) =>
                                                setValidation(true)
                                            }
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            className="form-control"
                                        />
                                        {name.length === 0 &&
                                            validation && (
                                                <span className="text-danger">
                                                    Enter the name
                                                </span>
                                            )}
                                    </div>
                                </div>
                                {/* <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Image</label>

                                        <input
                                            type="file"
                                            required
                                            onChange={(e) => setImage(e.target.files[0])}
                                        />
                                    </div>
                                </div> */}
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Image URL

                                        </label>
                                        <input
                                            required
                                            value={imageURL}
                                            onMouseDown={(e) =>
                                                setValidation(true)
                                            }
                                            onChange={(e) =>
                                                setImageURL(e.target.value)
                                            }
                                            className="form-control"
                                        />
                                        {imageURL.length === 0 &&
                                            validation && (
                                                <span className="text-danger">
                                                    Enter the image URL
                                                </span>
                                            )}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea
                                            required
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Brand</label>
                                        <input
                                            required
                                            value={brand}
                                            onChange={(e) => setBrand(e.target.value)}
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input
                                            required
                                            type="number"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Size</label>
                                        <input
                                            required
                                            type="number"
                                            value={size}
                                            onChange={(e) => setSize(e.target.value)}
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Quantity</label>
                                        <input
                                            required
                                            type="number"
                                            value={quantity}
                                            onChange={(e) => setQuantity(e.target.value)}
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProductCreate;

