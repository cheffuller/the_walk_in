import { Link } from "react-router-dom";
import { Col, ListGroup, ListGroupItem } from "react-bootstrap";

import AdminCreateCompany from "./AdminCreateCompany";
import AdminCreateUser from "./AdminCreateUser";

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
              <Link to='/admin/vendors' >
                Create Vendor
              </Link>
            </ListGroupItem>
            <ListGroupItem>
              <Link to='/admin/products' >
                Create Product
              </Link>
            </ListGroupItem>
          </ListGroup>
        </Col>
    )
}

export default AdminCreate