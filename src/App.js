// import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Router from './Router';
import NavBar from './frontend/components/NavBar';
import Footer from './frontend/components/Footer';
import Header from './frontend/components/Header';


function App() {
  const [cart, setCart] = useState({ id: 0 });
  const [appUser, setAppUser] = useState({ id: '' });

  useEffect(() => {
    const userID = JSON.parse(localStorage.getItem('userID'));
    if (userID) {
      (async () => {
        try {
          const res = await axios.get(
            `${process.env.REACT_APP_API_URL}user/${userID}`
          );
          setAppUser(res.data);
        } catch (err) {}
      })();
    }
  }, []);

  useEffect(() => {
    (async () => {
      if (appUser.id) {
        try {
          const res = await axios.get(
            `${process.env.REACT_APP_API_URL}cart/user/${appUser.id}`
          );
          setCart(res.data);
        } catch (err) {
          setCart({ id: 0, user_id: appUser.id, status: true });
        }
      }
    })();
  }, [appUser.id]);

  return (
    <div className='App'>
      <NavBar user={appUser} cart={cart} setCart={setCart} setAppUser={setAppUser} />
      <Header></Header>
      <Router user={appUser} cart={cart} setCart={setCart} />
      <Footer></Footer>
    </div>
  );
}

export default App;
