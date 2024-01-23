import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

import { handleEditChange } from '../../lib/handleEditChange';
import DeleteButton from '../../lib/DeleteButton';
import EditMessage from '../../lib/EditMessage';

const AddressEdit = ({ addressId, user }) => {
  const [address, setAddress] = useState({
    line_1: '',
    line_2: '',
    city: '',
    state: '',
    zip: '',
  });
  const [message, setMessage] = useState();

  useEffect(() => {
    (async () => {
      if (addressId) {
        try {
          const res = await axios.get(
            `${process.env.REACT_APP_API_URL}address/${addressId}`
          );
          setAddress(res.data);
        } catch (err) {}
      }
    })();
  }, [addressId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}address/${address.id}`,
        address
      );
      setMessage(res.data.message);
    } catch (err) {}
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId='companyAddLineOne'>
        <Form.Label>Address Line 1</Form.Label>
        <Form.Control
          type='text'
          value={address.line_1 ? address.line_1 : ''}
          onChange={handleEditChange(address, 'line_1', setAddress)}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='companyAddLineTwo'>
        <Form.Label>Address Line 2</Form.Label>
        <Form.Control
          type='text'
          value={address.line_2 ? address.line_2 : ''}
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
      <div className='text-center'>
        <Button variant='dark' type='submit'>
          Update Address Info
        </Button>{' '}
        <DeleteButton user={user} />
      </div>
      <EditMessage message={message} />
    </Form>
  );
};

export default AddressEdit;
