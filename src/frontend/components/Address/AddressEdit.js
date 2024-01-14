import { useEffect, useState } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';

import { handleEditChange } from '../../lib/handleEditChange';

const AddressEdit = ({ addressId }) => {
  const [address, setAddress] = useState();

  useEffect(() => {
    (async () => {
      if (addressId) {
        const res = await axios.get(
          `http://localhost:8080/api/address/${addressId}`
        );
        setAddress(res.data);
      }
    })();
  }, [addressId]);

  return (
    <>
      {console.log(address)}
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
    </>
  );
};

export default AddressEdit;
