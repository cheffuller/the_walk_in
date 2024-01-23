// import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { redirect } from 'react-router';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Router from './Router';
import NavBar from './frontend/components/NavBar';
import Footer from './frontend/components/Footer';
import Header from './frontend/components/Header';

function App() {
  const { user, isAuthenticated } = useAuth0();
  const [allUsers, setAllUsers] = useState([]);
  const [appUser, setAppUser] = useState({ id: '' });
  const [cart, setCart] = useState({ id: 0 });

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}user/`);
      setAllUsers(res.data);
      console.log(allUsers)
    })();
  }, []);

  useEffect(() => {
      // if (isAuthenticated && allUsers[0]) {
      //   try {
      //     const res = await axios.get(
      //       `${process.env.REACT_APP_API_URL}user/name/${user.nickname}`
      //     );
      //     setAppUser(res.data);
      //   } catch (error) {
      //     redirect('/user/new/');
      //   }
      // }
      if (allUsers[0] && user) {
        allUsers.map((singleUser) => {
          if (singleUser.username === user.nickname) {
            setAppUser(singleUser)
          }
        })
      }
    }, [user, appUser]);

  // try {
  //   await returnsPromise()
  // } catch (error) {
  //   console.log('That did not go well.')
  // }

  useEffect(() => {
    (async () => {
      if (appUser.id) {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}cart/user/${appUser.id}`
        );
        setCart(res.data);
      } else {
        setCart({ id: 0, user_id: appUser.id, status: true });
      }
    })();
  }, [appUser.id]);

  // const NewUserRedirect = () => {
  //   if ((user) && (appUser.username !== user.nickname)) {
  //     return redirect(`/user/new/${user.nickname}`)
  //   }
  //   return (
  //     <></>
  //   )
  // }

  return (
    <div className='App'>
      <NavBar user={appUser} cart={cart} setCart={setCart} />
      <Header></Header>
      <Router user={appUser} cart={cart} setCart={setCart} />
      <Footer></Footer>
      {/* <NewUserRedirect /> */}
    </div>
  );
}

export default App;
