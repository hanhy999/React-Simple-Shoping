import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'


function Header() {
    const name = sessionStorage.getItem('username')
    const [showName, setShowName] = useState(name);
    const [cartItems, setCartItems] = useState([]);

    const logout = () => {
        sessionStorage.removeItem('username')
        setShowName('')
        toast.success('ĐĂNG XUẤT THÀNH CÔNG', { autoClose: 1500 })
    }

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

    // useEffect(() => {

    // }, [name]);
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
                <div class="container text-light">
                    <div class="w-100 d-flex justify-content-between">
                        <div>
                            <i class="fa fa-envelope mx-2"></i>
                            <a class="navbar-sm-brand text-light text-decoration-none" href="#">info@company.com</a>
                            <i class="fa fa-phone mx-2"></i>
                            <a class="navbar-sm-brand text-light text-decoration-none" href="#">010-000-0000</a>
                        </div>
                        <div>
                            <a class="text-light" href="#" target="_blank" rel="sponsored"><i class="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
                            <a class="text-light" href="#" target="_blank"><i class="fab fa-instagram fa-sm fa-fw me-2"></i></a>
                            <a class="text-light" href="#" target="_blank"><i class="fab fa-twitter fa-sm fa-fw me-2"></i></a>
                            <a class="text-light" href="#" target="_blank"><i class="fab fa-linkedin fa-sm fa-fw"></i></a>
                        </div>
                    </div>
                </div>
            </nav>

            <nav class="navbar navbar-expand-lg navbar-light shadow">
                <div class="container d-flex justify-content-between align-items-center">
                    <Link class="navbar-brand text-success logo h1 align-self-center" to="/Product">
                        Jassa
                    </Link>
                    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                        <div class="flex-fill">
                            <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                <li class="nav-item">
                                    <Link class="nav-link" to='/'>Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to='/about'>About</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to={'/listing'}>Shop</Link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" >Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div class="navbar align-self-center d-flex">
                            <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                                <div class="input-group">
                                    <input type="text" class="form-control" id="inputMobileSearch" placeholder="Search ..." />
                                    <div class="input-group-text">
                                        <i class="fa fa-fw fa-search"></i>
                                    </div>
                                </div>
                            </div>
                            <a class="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                                <i class="fa fa-fw fa-search text-dark mr-2"></i>
                            </a>
                            <Link class="nav-icon position-relative text-decoration-none" to={'/addToCart'}>
                                <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                                <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                            </Link>
                            {
                                name ? <button onClick={logout}>Logout</button> :
                                    <Link class="nav-icon position-relative text-decoration-none" to={'/login'}>
                                        <i class="fa fa-fw fa-user text-dark mr-3"></i>
                                        {/* <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span> */}
                                    </Link>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header