import { useEffect, useState } from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './frontend/redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

import Router from './Router';
import NavBar from './frontend/containers/NavBar';
import Footer from './frontend/components/Footer';
import Header from './frontend/components/Header';

const App = () => {
  const [cart, setCart] = useState({ id: 0, total_price: 0, item_quantity: 0 });
  const [appUser, setAppUser] = useState(''); 
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}user/`);
        setAllUsers(res.data);
        setAppUser(res.data[0])
      } catch (err) {}
    })();
  }, []);

  return (
    <Provider store={store}>
      <NavBar user={appUser} setAppUser={setAppUser} allUsers={allUsers}/>
      <Header></Header>
      <Router user={appUser} cart={cart} setCart={setCart} />
      <Footer></Footer>
    </Provider>
  );
}

export default App;
