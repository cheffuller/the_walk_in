import { Routes, Route } from 'react-router';

import { AuthenticationGuard } from './frontend/components/AuthenticationGuard';
import CompanyEdit from './frontend/components/Company/CompanyEdit';
import Login from './frontend/components/Login/Login';
import UserEdit from './frontend/components/User/UserEdit';
import UserProfile from './frontend/components/User/UserProfile';
import DeliveryEdit from './frontend/components/Delivery/DeliveryEdit';
import ProductEdit from './frontend/components/Product/ProductEdit';
import ProductDetail from './frontend/containers/Product/ProductDetail';
import ProductShop from './frontend/containers/Product/ProductShop';
import Home from './frontend/components/Home';
import AdminHome from './frontend/components/Admin/AdminHome';
import AdminListAll from './frontend/components/Admin/AdminListAll';
import VendorEdit from './frontend/components/Vendor/VendorEdit';
import CartEdit from './frontend/components/Cart/CartEdit';
import CartView from './frontend/containers/Cart/CartView';

const Router = ({ user }) => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login user={user} />} />
      <Route
        path='/cart/edit/:cartId'
        element={<AuthenticationGuard component={CartEdit} user={user} />}
      />
      <Route
        path='/cart/view/:cartId'
        element={<AuthenticationGuard component={CartView} user={user} />}
      />
      <Route
        path='/company/edit/:companyId'
        element={<AuthenticationGuard component={CompanyEdit} user={user} />}
      />
      <Route
        path='/delivery/edit/:deliveryId'
        element={<AuthenticationGuard component={DeliveryEdit} user={user} />}
      />
      <Route
        path='/product'
        element={<AuthenticationGuard component={ProductShop} />}
      />
      <Route
        path='/product/edit/:productId'
        element={<AuthenticationGuard component={ProductEdit} user={user} />}
      />
      <Route
        path='/product/:productId'
        element={<AuthenticationGuard component={ProductDetail} user={user} />}
      />
      <Route
        path='/vendor'
        element={<AuthenticationGuard component={VendorEdit} user={user} />}
      />
      <Route
        path='/vendor/edit/:vendorId'
        element={<AuthenticationGuard component={VendorEdit} user={user} />}
      />
      <Route
        path='/user'
        element={<AuthenticationGuard component={UserProfile} appUser={user} />}
      />
      <Route
        path='/user/edit/:userId'
        element={<AuthenticationGuard component={UserEdit} user={user} />}
      />
      <Route
        path='admin'
        element={<AuthenticationGuard component={AdminHome} user={user} />}
      />
      <Route
        path='admin/companies'
        element={
          <AuthenticationGuard
            component={AdminListAll}
            user={user}
            table='company'
          />
        }
      />{' '}
      <Route
        path='admin/users'
        element={
          <AuthenticationGuard
            component={AdminListAll}
            user={user}
            table='user'
          />
        }
      />
      <Route
        path='admin/deliveries'
        element={
          <AuthenticationGuard
            component={AdminListAll}
            user={user}
            table='delivery'
          />
        }
      />
      <Route
        path='admin/products'
        element={
          <AuthenticationGuard
            component={AdminListAll}
            user={user}
            table='product'
          />
        }
      />
      <Route
        path='admin/vendors'
        element={
          <AuthenticationGuard
            component={AdminListAll}
            user={user}
            table='vendor'
          />
        }
      />
      <Route
        path='admin/carts'
        element={
          <AuthenticationGuard
            component={AdminListAll}
            user={user}
            table='cart'
          />
        }
      />
    </Routes>
  );
};

export default Router;
