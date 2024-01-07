import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const Login = () => {
  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container className='py-5'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='userName'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            autofocus
            type='text'
            placeholder='Enter username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='userPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant='dark' type='submit' disabled={!validateForm()}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
