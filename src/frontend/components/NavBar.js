import {
  Badge,
  Button,
  Container,
  Nav,
  Navbar
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AdminLink from './Admin/AdminLink';
import LogoutButton from './Login/LogoutButton';
import LoginButton from './Login/LoginButton';

export default function NavBar({ user, cart }) {

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

  const CartItems = ({ items }) => {
    return (items) ? items : 0
  }

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
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/home'>Search</Nav.Link>
            <Nav.Link href='/delivery'>About</Nav.Link>
            <Link to='/user' style={style.Link}>
              My Account
            </Link>
            <Link to={myCompanyLink()} style={style.Link}>
              My Company
            </Link>
            <AdminLink user={user} style={style.Link} />
          </Nav>
          <LogButtonToggle />
          <Button variant='outline-dark' className='ms-3'>
            <i className='bi-cart-fill me-1' />
            Cart
            <Badge pill bg='dark' className='ms-1'>
              <CartItems items={cart.item_quantity} />
            </Badge>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
