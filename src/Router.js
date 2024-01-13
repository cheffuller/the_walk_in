import { Routes, Route } from 'react-router';
// import cookie from 'cookie';

import { AuthenticationGuard } from './frontend/components/AuthenticationGuard';
import CompanyAccount from './frontend/components/Company/CompanyAccount';
import Login from './frontend/components/Login/Login';
import UserEdit from './frontend/components/User/UserEdit';
import Delivery from './frontend/components/Delivery/Delivery';
import ProductEdit from './frontend/components/Product/ProductEdit';
import ProductDetail from './frontend/components/Product/ProductDetail';
import VendorAccount from './frontend/components/Vendor/VendorAccount';
import Home from './frontend/components/Home';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route
        path='/company'
        element={<AuthenticationGuard component={CompanyAccount} />}
      />
      <Route
        path='/delivery'
        element={<AuthenticationGuard component={Delivery} />}
      />
      <Route
        path='/product/edit/:productId'
        element={<AuthenticationGuard component={ProductEdit} />}
      />
      <Route
        path='/products/:productId'
        element={<AuthenticationGuard component={ProductDetail} />}
      />
      <Route
        path='/vendor'
        element={<AuthenticationGuard component={VendorAccount} />}
      />
      <Route
        path='/user/edit/:userId'
        element={<AuthenticationGuard component={UserEdit} />}
      />
    </Routes>
  );
};

export default Router;
