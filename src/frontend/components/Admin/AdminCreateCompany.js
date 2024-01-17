import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

import { handleEditChange } from '../../lib/handleEditChange';
import EditMessage from '../../lib/EditMessage';
import DeleteButton from '../../lib/DeleteButton';

const AdminCreateCompany = ({ user }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setMessage('')
    setShow(false)
  };
  const handleShow = () => setShow(true);
  const [company, setCompany] = useState({ name: '', phone: '', email: '' });
  const [address, setAddress] = useState({
    line_1: '',
    city: '',
    state: '',
    zip: '',
    delivery: 'true',
  });
  const [message, setMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addRes = await axios.post(
      `${process.env.REACT_APP_API_URL}address/`,
      address
    );
    const addressId = addRes.data.id;
    setCompany({
      ...company,
      address_id: addressId,
      delivery_address_id: addressId,
    });
    const coRes = await axios.post(
      `${process.env.REACT_APP_API_URL}company/`,
      company
    );
    coRes.statusText === 'OK'
      ? setMessage('Company successfully created')
      : setMessage('Something went wrong...');
    setCompany({ name: '', phone: '', email: '' });
    setAddress({ line_1: '', city: '', state: '', zip: '', delivery: 'true' });
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
            <Form.Group className='mb-3' controlId='companyAddLineOne'>
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control
                type='text'
                value={address.line_1}
                onChange={handleEditChange(address, 'line_1', setAddress)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='companyAddLineTwo'>
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control
                type='text'
                value={address.line_2}
                onChange={handleEditChange(address, 'line_2', setAddress)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='companyAddCity'>
              <Form.Label>City</Form.Label>
              <Form.Control
                type='text'
                value={address.city}
                onChange={handleEditChange(address, 'city', setAddress)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='companyAddState'>
              <Form.Label>State</Form.Label>
              <Form.Control
                type='text'
                value={address.state}
                onChange={handleEditChange(address, 'state', setAddress)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='companyAddZip'>
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type='text'
                value={address.zip}
                onChange={handleEditChange(address, 'zip', setAddress)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='companyAddDel'>
              <Form.Label>Delivery</Form.Label>
              <Form.Check type='checkbox' label='check if delivery address' />
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
          <Button variant='primary'>Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdminCreateCompany;
