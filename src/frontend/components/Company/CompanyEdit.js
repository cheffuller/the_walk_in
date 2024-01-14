import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';

import AddressEdit from '../Address/AddressEdit';
import { handleEditChange } from '../../lib/handleEditChange';
import EditMessage from '../../lib/EditMessage';

const CompanyEdit = (props) => {
  const user = props.props.user;
  const [company, setCompany] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    (async () => {
      if (user) {
        const res = await axios.get(
          `http://localhost:8080/api/company/${user.company_id}`
        );
        setCompany(res.data);
      }
    })();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      `http://localhost:8080/api/company/${company.id}`,
      company
    );
    setMessage(res.data.message);
  };

  const AddressEditContainer = () => {
    if (company) {
    return (
      <AddressEdit addressId={company.address_id}/>
    )}
  }

  return (
    <Container className='px-4 px-lg-5 my-5'>{console.log(company)}
      <h5 className='text-center text-black'>Company Account Information</h5>
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
        {/* <AddressEditContainer /> */}
        <div className='text-center'>
          <Button variant='dark'>Add Address</Button>{' '}
          <Button variant='dark'>Edit</Button>{' '}
          <Button variant='dark'>Delete</Button>
        </div>
        <EditMessage message={message} />
      </Form>
    </Container>
  );
};

export default CompanyEdit;
