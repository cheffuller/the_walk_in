import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminHome = ({ user }) => {
  const style = {
    Link: {
      color: 'inherit',
    },
  };

  return (
    <Container className='my-5'>
      <ListGroup>
        <ListGroupItem>
          <Link to='/admin/companies' style={style.Link}>
            Edit Companies
          </Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link to='/admin/users' style={style.Link}>
            Edit Users
          </Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link to='/admin/vendors' style={style.Link}>
            Edit Vendors
          </Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link to='/admin/products' style={style.Link}>
            Edit Products
          </Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link to='/admin/deliveries' style={style.Link}>
            Edit Deliveries
          </Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link to='/admin/carts' style={style.Link}>
            Edit Carts
          </Link>
        </ListGroupItem>
      </ListGroup>
    </Container>
  );
};

export default AdminHome;
