import { useState } from 'react';
import axios from 'axios';
import { Button, Form, FormText } from 'react-bootstrap';

import { handleEditChange } from '../../lib/handleEditChange';
import EditMessage from '../../lib/EditMessage';

const AdminCreateAddress = ({ setCompany, company }) => {
  const [address, setAddress] = useState({
    line_1: '',
    line_2: '',
    city: '',
    state: '',
    zip: '',
    delivery: 'true',
  });
  const [message, setMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}address/`,
        address
      );
      setCompany({
        ...company,
        address_id: res.data.id,
        delivery_address_id: res.data.id,
      });
      res.statusText === 'OK'
        ? setMessage('Address successfully created')
        : setMessage('Something went wrong...');
    } catch (err) {}
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormText className='text-center mb-3'>
        Create company address first, then create company
      </FormText>
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
      <div className='text-center'>
        <Button variant='dark' type='submit'>
          Create Address
        </Button>
      </div>
      <EditMessage message={message} />
    </Form>
  );
};

export default AdminCreateAddress;
