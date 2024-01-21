// import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Router from './Router';
import NavBar from './frontend/components/NavBar';
import Footer from './frontend/components/Footer';
import Header from './frontend/components/Header';

function App() {
  const { user, isAuthenticated } = useAuth0();
  const [appUser, setAppUser] = useState({ id: ''});
  const [cart, setCart] = useState({ id: 0 })

  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}user/name/${user.nickname}`
        );
        setAppUser(res.data);
      }
    })();
  }, [isAuthenticated, user]);

  useEffect(() => {
    (async () => {
      if (appUser.id) {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}cart/user/${appUser.id}`
        )
        setCart(res.data)
      } else {
        setCart({ id: 0, user_id: appUser.id, status: true })
      }
    })();}, [appUser.id]
  )

  return (
    <div className='App'>
      <NavBar user={appUser} cart={{ cart, setCart }} />
      <Header></Header>
      <Router user={appUser} cart={cart} setCart={setCart} />
      <Footer></Footer>
    </div>
  );
}

export default App;
