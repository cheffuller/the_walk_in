import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';

import { handleEditChange } from '../../lib/handleEditChange';
import DeleteButton from '../../lib/DeleteButton';
import EditMessage from '../../lib/EditMessage';

const UserEdit = ({ user }) => {
  const { userId } = useParams();
  const [appUser, setAppUser] = useState({ username: '' });
  const [message, setMessage] = useState();

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}user/${userId}`);
      setAppUser(res.data);
    })();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      `${process.env.REACT_APP_API_URL}user/${appUser.id}`,
      appUser
    );
    setMessage(res.data.message);
  };

  return (
    <Container className='px-4 px-lg-5 my-5'>
      <h5 className='text-center text-black'>Account Information</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='userName'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            value={appUser.username}
            onChange={handleEditChange(appUser, 'username', setAppUser)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='userFirstName'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='text'
            value={appUser.first_name}
            onChange={handleEditChange(appUser, 'first_name', setAppUser)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='userLastName'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='text'
            value={appUser.last_name}
            onChange={handleEditChange(appUser, 'last_name', setAppUser)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='userPhone'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type='tel'
            value={appUser.phone}
            onChange={handleEditChange(appUser, 'phone', setAppUser)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='userEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            value={appUser.email}
            onChange={handleEditChange(appUser, 'email', setAppUser)}
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='userCompany'>
          <Form.Label>Company</Form.Label>
          <Form.Control
            type='text'
            value={appUser.company_id}
            onChange={handleEditChange(appUser, 'company_id', setAppUser)}
          />
        </Form.Group>
        <div className='text-center'>
        <Button variant='dark' type='submit'>Update User</Button>{' '}
          <DeleteButton user={user} />
        </div>
        <EditMessage message={message} />
      </Form>
    </Container>
  );
};

export default UserEdit;
