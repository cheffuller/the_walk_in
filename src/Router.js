import { Routes, Route } from 'react-router';
import { Navigate } from "react-router-dom";
import cookie from 'cookie';

import CompanyAccount from './frontend/components/CompanyAccount';
import Login from './frontend/components/Login';
import UserAccount from './frontend/components/UserAccount';
import Delivery from './frontend/components/Delivery';
import Product from './frontend/components/Product';
import VendorAccount from './frontend/components/VendorAccount';
import Home from './frontend/components/Home';



const Router = () => {
  document.cookie = cookie.serialize('loggedIn', 'true', { maxAge: 1000 * 60 });
  document.cookie = cookie.serialize('loggedIn', null, { maxAge: 0 });
  
  const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies['loggedIn'] ? true : false;
  };
  
  const ProtectedRoute = (props) => {
    const { component: Component, ...rest } = props;
  
    return checkAuth() === true ? (
      <Component {...rest} />
    ) : (
      <Navigate to='/login' />
    );
  };

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route
        path='/company'
        element={<ProtectedRoute component={CompanyAccount} />}
      />
      <Route
        path='/delivery'
        element={<ProtectedRoute component={Delivery} />}
      />
      <Route path='/product' element={<ProtectedRoute component={Product} />} />
      <Route
        path='/vendor'
        element={<ProtectedRoute component={VendorAccount} />}
      />
      <Route
        path='/user'
        element={<ProtectedRoute component={UserAccount} />}
      />
    </Routes>
  );
};

export default Router;
