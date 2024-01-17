import { Link } from 'react-router-dom';
import {
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap';

import AdminCreate from './AdminCreate';

const AdminHome = ({ user }) => {
  const style = {
    Link: {
      color: 'inherit',
    },
  };

  return (
    <Container className='my-3'>
      <Row>
        <Col xs={12} sm={6}>
          <ListGroup className='my-2'>
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
        </Col>
        <AdminCreate user={user} />
      </Row>
    </Container>
  );
};

export default AdminHome;
