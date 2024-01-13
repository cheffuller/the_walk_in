import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';

import AddressEdit from '../Address/AddressEdit';
import { handleEditChange } from '../../lib/handleEditChange';
import EditMessage from '../../lib/EditMessage';

const CompanyEdit = () => {
  const { companyID } = useParams();



  return (
    <Container className='px-4 px-lg-5 my-5'>
      <h5 className='text-center text-black'>Company Account Information</h5>
      <Form>
        <Form.Group className='mb-3' controlId='companyName'>
          <Form.Label>Company Name</Form.Label>
          <Form.Control type='text' placeholder='Enter company name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='companyPhone'>
          <Form.Label>Company Phone Number</Form.Label>
          <Form.Control type='tel' placeholder='Enter company phone number' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='companyEmail'>
          <Form.Label>Company Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter company email address'
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <AddressEdit></AddressEdit>
        <div className='text-center'>
          <Button variant='dark'>Add Address</Button>{' '}
          <Button variant='dark'>Edit</Button>{' '}
          <Button variant='dark'>Delete</Button>
        </div>
      </Form>
    </Container>
  );
};

export default CompanyEdit;
