import { Routes, Route } from 'react-router';
// import cookie from 'cookie';

import { AuthenticationGuard } from './frontend/components/AuthenticationGuard';
import CompanyAccount from './frontend/components/CompanyAccount';
import Login from './frontend/components/Login';
import UserAccount from './frontend/components/UserAccount';
import Delivery from './frontend/components/Delivery';
import Product from './frontend/components/Product';
import VendorAccount from './frontend/components/VendorAccount';
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
      <Route path='/product' element={<AuthenticationGuard component={Product} />} />
      <Route
        path='/vendor'
        element={<AuthenticationGuard component={VendorAccount} />}
      />
      <Route
        path='/user'
        element={<AuthenticationGuard component={UserAccount} />}
      />
    </Routes>
  );
};

export default Router;
