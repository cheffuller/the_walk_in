import { Routes, Route } from 'react-router';

import CompanyAccount from './frontend/components/CompanyAccount';
import Login from './frontend/components/Login';
import UserAccount from './frontend/components/UserAccount';
import Delivery from './frontend/components/Delivery';
import Product from './frontend/components/Product';
import VendorAccount from './frontend/components/VendorAccount';

const Router = () => {
    return <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/company" element={<CompanyAccount/>} />
      <Route path="/delivery" element={<Delivery/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/vendor" element={<VendorAccount/>} />
      <Route path="/user" element={<UserAccount/>} />
    </Routes>;
  }
  
  export default Router