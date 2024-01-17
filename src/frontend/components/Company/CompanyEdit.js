import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';

import AddressEdit from '../Address/AddressEdit';
import { handleEditChange } from '../../lib/handleEditChange';
import EditMessage from '../../lib/EditMessage';
import DeleteButton from '../../lib/DeleteButton';

const CompanyEdit = ({ user }) => {
  const { companyId } = useParams();
  const [company, setCompany] = useState({ name: '', phone: '', email: '' });
  const [message, setMessage] = useState();

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}company/${companyId}`
      );
      setCompany(res.data);
    })();
  }, [companyId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      `${process.env.REACT_APP_API_URL}company/${company.id}`,
      company
    );
    setMessage(res.data.message);
  };

  return (
    <Container className='px-4 px-lg-5 my-5'>
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
        <div className='text-center'>
          <Button variant='dark' type='submit'>
            Update Company Info
          </Button>{' '}
          <DeleteButton user={user} />
        </div>
        <EditMessage message={message} />
      </Form>
      <AddressEdit user={user} addressId={company.address_id} />
    </Container>
  );
};

export default CompanyEdit;
