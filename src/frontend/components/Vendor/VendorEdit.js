import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';

import { handleEditChange } from '../../lib/handleEditChange';
import DeleteButton from '../../lib/DeleteButton';
import EditMessage from '../../lib/EditMessage';

const VendorEdit = ({ user }) => {
  const { vendorId } = useParams();
  const [vendor, setVendor] = useState({
    phone: '',
    name: '',
    email: '',
    contact: '',
  });
  const [message, setMessage] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}vendor/${vendorId}`
        );
        setVendor(res.data);
      } catch (err) {}
    })();
  }, [vendorId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}vendor/${vendor.id}`,
        vendor
      );
      setMessage(res.data.message);
    } catch (err) {}
  };

  return (
    <Container className='px-4 px-lg-5 my-5'>
      <h5 className='text-center text-black'>Vendor Information</h5>
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
            Update Vendor
          </Button>{' '}
          <DeleteButton user={user} />
        </div>
        <EditMessage message={message} />
      </Form>
    </Container>
  );
};

export default VendorEdit;
