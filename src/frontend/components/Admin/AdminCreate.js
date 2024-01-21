import { Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import AdminCreateCompany from './AdminCreateCompany';
import AdminCreateUser from './AdminCreateUser';
import AdminCreateVendor from './AdminCreateVendor';
import AdminCreateProduct from './AdminCreateProduct';

const AdminCreate = ({ user }) => {
  return (
    <Col>
      <ListGroup className='my-2'>
        <ListGroupItem>
          <AdminCreateCompany user={user} />
        </ListGroupItem>
        <ListGroupItem>
          <AdminCreateUser user={user} />
        </ListGroupItem>
        <ListGroupItem>
          <AdminCreateVendor user={user} />
        </ListGroupItem>
        <ListGroupItem>
          <AdminCreateProduct user={user} />
        </ListGroupItem>
      </ListGroup>
    </Col>
  );
};

export default AdminCreate;
