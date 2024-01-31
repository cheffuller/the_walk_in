import { useAuth0 } from '@auth0/auth0-react';
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AdminLink from './Admin/AdminLink';
import LogoutButton from './Login/LogoutButton';
import LoginButton from './Login/LoginButton';

export default function NavBar({ user, cart, setCart }) {
  const { isAuthenticated } = useAuth0();

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
