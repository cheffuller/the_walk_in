import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

import { handleEditChange } from '../../lib/handleEditChange';
import EditMessage from '../../lib/EditMessage';

const AdminCreateVendor = ({ user }) => {
  const [show, setShow] = useState(false);
  const [vendor, setVendor] = useState({
    name: '',
    contact: '',
    phone: '',
    email: '',
  });
  const [message, setMessage] = useState();
  const handleClose = () => {
    setVendor({ name: '', contact: '', phone: '', email: '' });
    setMessage('');
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (vendor.name) {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}vendor/`,
          vendor
        );
        res.statusText === 'OK'
          ? setMessage('Vendor successfully created')
          : setMessage('Something went wrong...');
      } catch (err) {}
    }
  };
  return (
    <>
      {' '}
      <Button variant='secondary' onClick={handleShow}>
        Create Vendor
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Vendor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='vendorName'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                value={vendor.name}
                onChange={handleEditChange(vendor, 'name', setVendor)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='vendorPhone'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type='tel'
                value={vendor.phone}
                onChange={handleEditChange(vendor, 'phone', setVendor)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='vendorEmail'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                value={vendor.email}
                onChange={handleEditChange(vendor, 'email', setVendor)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='vendorContact'>
              <Form.Label>Contact Name</Form.Label>
              <Form.Control
                type='text'
                value={vendor.contact}
                onChange={handleEditChange(vendor, 'contact', setVendor)}
              />
            </Form.Group>
            <div className='text-center'>
              <Button variant='dark' type='submit'>
                Create Vendor
              </Button>
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

export default AdminCreateVendor;
