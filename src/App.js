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
  const [appUser, setAppUser] = useState();

  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        const res = await axios.get(
          `http://localhost:8080/api/user/${user.nickname}`
        );
        setAppUser(res.data);
      }
    })();
  }, [isAuthenticated, user]);

  return (
    <div className='App'>
      <NavBar user={appUser}></NavBar>
      <Header></Header>
      <Router user={appUser}></Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
