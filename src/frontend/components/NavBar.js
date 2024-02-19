import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AdminLink from './Admin/AdminLink';
import LogoutButton from './Login/LogoutButton';
import LoginButton from './Login/LoginButton';
import UserSet from './User/UserSet';

export default function NavBar({ user, cart, setCart, setAppUser }) {
  const { isAuthenticated } = useAuth0();
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}user/`);
        setAllUsers(res.data);
      } catch (err) {}
    })();
  }, []);

  const myCompanyLink = () => {
    if (user.id) {
      return `/company/edit/${user.company_id}`;
    }
  };

  const LogButtonToggle = () => {
    if (isAuthenticated) {
      return <LogoutButton />;
    } else {
      return <LoginButton />;
    }
  };

  const CartItems = ({ items }) => {
    return items ? items : 0;
  };

  const style = {
    Link: {
      margin: 'auto 10px',
      color: 'inherit',
      textDecoration: 'inherit',
    },
  };

  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand>
          <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <b>The Walk-In </b>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse
          id='navbarSupportedContent'
          className='collapse navbar-collapse'
        >
          <Nav className='m-auto'>
            <Link to='/' style={style.Link}>
              Home
            </Link>
            <Link to='/product' style={style.Link}>
              Shop
            </Link>
            <Link to='/user' style={style.Link}>
              My Account
            </Link>
            <Link to={myCompanyLink()} style={style.Link}>
              My Company
            </Link>
            <AdminLink user={user} style={style.Link} />
          </Nav>
          <UserSet
              appUser={user}
              setAppUser={setAppUser}
              allUsers={allUsers}
            />
            <LogButtonToggle />
          <Link to={`cart/view/${cart.id}`}>
            <Button variant='outline-dark' className='ms-3'>
              <i className='bi-cart-fill me-1' />
              Cart
              <Badge pill bg='dark' className='ms-1'>
                <CartItems items={cart.item_quantity} />
              </Badge>
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
