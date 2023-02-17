import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './admin/login';
import Header from './Header';
import Register from './admin/Register';
import ProductListing from './CRUD/ProductListing';
import ProductCreate from './CRUD/ProductCreate';
import ProductDetail from './CRUD/ProductDetail';
import ProductEdit from './CRUD/ProductEdit';
import About from './component/About';
import ResetPassword from './admin/ResetPassword';
import ForgotPassword from './admin/ForgotPassword';
import Product from './Category/ProductList'

// import TopMenu from "./Category/TopMenu";
// import { CartProvider } from "./Category/Cart";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ToastContainer theme='colored' position='top-center'></ToastContainer>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
        <Route path='/resetpassword:id' element={<ResetPassword />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/listing' element={<ProductListing />}></Route>
        <Route path='/listing/create' element={<ProductCreate />}></Route>
        <Route path='/listing/detail/:productid' element={<ProductDetail />}></Route>
        <Route path='/listing/edit/:productid' element={<ProductEdit />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
