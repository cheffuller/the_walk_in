import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

import { handleEditChange } from '../../lib/handleEditChange';
import EditMessage from '../../lib/EditMessage';
import DeleteButton from '../../lib/DeleteButton';
import AdminCreateAddress from './AdminCreateAddress';

const AdminCreateCompany = ({ user }) => {
  const [show, setShow] = useState(false);
  const [company, setCompany] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [message, setMessage] = useState();
  const handleClose = () => {
    setMessage('');
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (company.address_id) {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}company/`,
          company
        );
        res.statusText === 'OK'
          ? setMessage('Company successfully created')
          : setMessage('Something went wrong...');
      } catch (err) {}
    }
  };

  return (
    <>
      <Button variant='secondary' onClick={handleShow}>
        Create Company
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Company</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AdminCreateAddress setCompany={setCompany} company={company} />
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='companyName'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                value={company.name}
                onChange={handleEditChange(company, 'name', setCompany)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='companyPhone'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type='tel'
                value={company.phone}
                onChange={handleEditChange(company, 'phone', setCompany)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='companyEmail'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                value={company.email}
                onChange={handleEditChange(company, 'email', setCompany)}
              />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <div className='text-center'>
              <Button variant='dark' type='submit'>
                Create Company
              </Button>{' '}
              <DeleteButton user={user} />
            </div>
            <EditMessage message={message} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdminCreateCompany;
