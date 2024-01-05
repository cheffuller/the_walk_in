import { Badge, Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='px-4 px-lg-5'>
        <Navbar.Brand href="#home">The Walk-In</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id='navbarSupportedContent' className='collapse navbar-collapse'>
          <Nav className="ms-4 me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Search</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#">My Account</Nav.Link>
            
          </Nav>
          <Button variant='outline-dark'>
            <i className='bi-cart-fill me-1' />
                Cart
                <Badge pill bg='dark' className='ms-1'>?</Badge>
            </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
