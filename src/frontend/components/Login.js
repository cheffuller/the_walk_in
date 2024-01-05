import { Button, Container, Form } from 'react-bootstrap';

const Login = () => {
  return (
    <Container className='py-5'>
      <Form>
        <Form.Group className='mb-3' controlId='userName'>
          <Form.Label>Username</Form.Label>
          <Form.Control type='text' placeholder='Enter username' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='userPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Enter password' />
        </Form.Group>
        <Button variant='dark' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
