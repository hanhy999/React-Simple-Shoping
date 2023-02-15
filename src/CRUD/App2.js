import './App2.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductListing from './EmpListing';
import ProductCreate from './EmpCreate';
import ProductDetail from './ProductDetail';
import ProductEdit from './ProductEdit';

function App2() {
  return (
    <div className="App">
      <h1>React JS CRUD Opertations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/CRUD' element={<ProductListing />}></Route>
          <Route path='/CRUD/create' element={<ProductCreate />}></Route>

          <Route path='/CRUD/detail/:productid' element={<ProductDetail />}></Route>
          <Route path='/CRUD/edit/:productid' element={<ProductEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App2;