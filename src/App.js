
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Provider } from 'react-redux'
import store from './frontend/redux/store'
import 'bootstrap/dist/css/bootstrap.min.css';

import Router from './Router';
import NavBar from './frontend/containers/NavBar';
import Footer from './frontend/components/Footer';
import Header from './frontend/components/Header';

function App() {
  const [cart, setCart] = useState({ id: 0, total_price: 0, item_quantity: 0 });
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

  return (
    <Provider store={store}>
      <NavBar
        user={appUser}
        setAppUser={setAppUser}
      />
      <Header></Header>
      <Router user={appUser} cart={cart} setCart={setCart} />
      <Footer></Footer>
    </Provider>
  );
}

export default App;
