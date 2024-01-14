import { Routes, Route } from 'react-router';
// import cookie from 'cookie';

import { AuthenticationGuard } from './frontend/components/AuthenticationGuard';
import CompanyEdit from './frontend/components/Company/CompanyEdit';
import Login from './frontend/components/Login/Login';
import UserEdit from './frontend/components/User/UserEdit';
import UserProfile from './frontend/components/User/UserProfile';
import Delivery from './frontend/components/Delivery/Delivery';
import ProductEdit from './frontend/components/Product/ProductEdit';
import ProductDetail from './frontend/components/Product/ProductDetail';
import VendorAccount from './frontend/components/Vendor/VendorAccount';
import Home from './frontend/components/Home';

const Router = ({ user }) => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route
        path='/company/edit/:companyId'
        element={<AuthenticationGuard component={CompanyEdit} user={user} />}
      />
      <Route
        path='/delivery'
        element={<AuthenticationGuard component={Delivery} user={user} />}
      />
      <Route
        path='/products/edit/:productId'
        element={<AuthenticationGuard component={ProductEdit} user={user} />}
      />
      <Route
        path='/products/:productId'
        element={<AuthenticationGuard component={ProductDetail} user={user} />}
      />
      <Route
        path='/vendor'
        element={<AuthenticationGuard component={VendorAccount} user={user} />}
      />
            <Route
        path='/user/'
        element={<AuthenticationGuard component={UserProfile} user={user} />}
      />
      <Route
        path='/user/edit/:userId'
        element={<AuthenticationGuard component={UserEdit} user={user} />}
      />
    </Routes>
  );
};

export default Router;
