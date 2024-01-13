import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';

const UserEdit = () => {
  const { userId } = useParams();
  const [user, setUser] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    (async () => {
      const res = await axios.get(`http://localhost:8080/api/user/${userId}`);
      setUser(res.data);
    })();
  }, [userId]);

  const handleChange = (name) => {
    return (e) => {
      setUser({ ...user, [name]: e.target.value });
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      `http://localhost:8080/api/user/${user.id}`,
      user
    );
    setMessage(res.data.message);
  };

  const EditMessage = () => {
    if (message) {
      return (
        <div className='text-center mt-3' style={{ color: 'red' }}>
          {message}
        </div>
      );
    }
  };

  return (
    <Container className='px-4 px-lg-5 my-5'>
      <h5 className='text-center text-black'>Account Information</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='userName'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            value={user.username}
            onChange={handleChange('username')}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='userFirstName'>
          <Form.Label>First Name</Form.Label>
          <Form.Control type='text' placeholder='Enter first name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='userLastName'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type='text' placeholder='Enter last name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='userPhone'>
          <Form.Label>Company Phone Number</Form.Label>
          <Form.Control type='tel' placeholder='Enter phone number' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='userEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='userPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Enter password' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='userCompany'>
          <Form.Label>Company</Form.Label>
          <Form.Control type='text' placeholder='Company' />
        </Form.Group>
        <div className='text-center'>
          <Button variant='dark'>Edit</Button>{' '}
          <Button variant='dark'>Delete</Button>
        </div>
        <EditMessage /> 
      </Form>
    </Container>
  );
};

export default UserEdit;
