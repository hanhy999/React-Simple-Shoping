import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usePagination from '../component/Paginnation';
import { Pagination, Stack } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const ProductListing = () => {
    const [productData, productDataChange] = useState(null);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const filteredData = productData ? productData.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())) : [];
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

    //sort
    filteredData.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });

    filteredData.sort((a, b) => {
        return a.price - b.price;
    });

    //phân trang
    const [page, setPage] = useState(1);
    const PER_PAGE = 10;
    const paginatedData = usePagination(filteredData, PER_PAGE);

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
                <div className="card-title" style={{ margin: "8px" }}> 
                    <h2>Product Listing</h2>
                </div>
                <div className="card-body" >
                    <div className="divbtn">
                        <input type="text" placeholder="Search by product name" value={searchTerm } style={{ marginBottom: "8px" }}
                            onChange={e => setSearchTerm(e.target.value)} />
                        <br></br>
                        <FormControl sx={{ width: '20%' }}>
                    <InputLabel id="demo-simple-select-label">Sort with</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={valueSort}
                        label="Sort"
                        style={{marginBottom : "8px"}}
                    >
                        <MenuItem value={filteredData.name}>Name</MenuItem>
                        <MenuItem value={'id'}>Id</MenuItem>
                        <MenuItem value={'description'}>Descriptions</MenuItem>
                    </Select>
                </FormControl>
                <br></br>
                        <Link to="create" className="btn btn-success" style={{ marginBottom: "8px" }} >Add New (+)</Link>
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
                            {filteredData.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    {/* <td>{item.image}</td> */}
                                    <td style={{width: "20%"}}>
                                        <img style={{width: "100%",height: "30vh"}} src={item.imageURL} width="300px" />
                                    </td>
                                    <td>{item.description}</td>
                                    <td>{item.brand}</td>
                                    <td>{item.price}</td>
                                    <td>{item.size}</td>
                                    <td>{item.quantity}</td>
                                    <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success" >Edit</a>
                                        <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger"  style={{ marginLeft: "8px" }} >Remove</a>

                                        <a onClick={() => LoadDetail(item.id)} className="btn btn-info"  style={{ marginLeft: "8px" }} >Detail</a>
                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Stack sx={{ clear: 'both', marginTop: '30px' }} alignItems="center">
                {/* <Pagination
                    sx={{ button: { color: 'black', width: '100%', margin: 'auto', marginTop: '30px' } }}
                    count={count < 20 ? count : 20} page={page} color="secondary" onChange={handleChange} /> */}
                <Pagination count={Math.ceil(filteredData.length / PER_PAGE)} page={page} onChange={(e, p) => {
                    setPage(p);
                    paginatedData.jump(p);
                }} />
            </Stack>

        </div>
    );
};

export default ProductListing;