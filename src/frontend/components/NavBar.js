import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import {
  Badge,
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import LogoutButton from './Login/LogoutButton';
import LoginButton from './Login/LoginButton';

export default function NavBar(props) {
  // const { user, isAuthenticated } = useAuth0();
  // const [appUser, setAppUser] = useState();

  // useEffect(() => {
  //   (async () => {
  //     if (isAuthenticated) {
  //       const res = await axios.get(
  //         `http://localhost:8080/api/user/${user.nickname}`
  //       );
  //       setAppUser(res.data);
  //     }
  //   })();
  // }, [user]);
  const user = props.user

  const myCompanyLink = () => {
    if (user) {
      return `/company/edit/${user.company_id}`
    }
  }

  const LogButtonToggle = () => {
    if (user) {
      return <LogoutButton />;
    } else {
      return <LoginButton />;
    }
  };

  const style = {
    Link: {
      margin: 'auto 5px',
      color: 'inherit',
      textDecoration: 'inherit',
    },
  };

  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container className='px-4 px-lg-5'>
        <Navbar.Brand>
          <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit' }}>
            The Walk-In{' '}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse
          id='navbarSupportedContent'
          className='collapse navbar-collapse'
        >
          <Nav className='ms-4 me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            {/* <NavDropdown title='Shop' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href='#link'>Search</Nav.Link>
            <Nav.Link href='/delivery'>About</Nav.Link>
            <Link to='/user' style={style.Link}>
              My Account
            </Link>
            <Link to={myCompanyLink()} style={style.Link}>
              My Company
            </Link>
          </Nav>
          <LogButtonToggle />
          <Button variant='outline-dark' className='ms-3'>
            <i className='bi-cart-fill me-1' />
            Cart
            <Badge pill bg='dark' className='ms-1'>
              ?
            </Badge>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
