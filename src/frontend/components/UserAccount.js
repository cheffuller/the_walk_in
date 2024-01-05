import { Button, Container, Form } from 'react-bootstrap';

const UserAccount = () => {
  return (
    <Container className='px-4 px-lg-5 my-5'>
      <h5 className='text-center text-black'>Account Information</h5>
      <Form>
        <Form.Group className='mb-3' controlId='userName'>
          <Form.Label>Username</Form.Label>
          <Form.Control type='text' placeholder='Enter username' />
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
        <Button variant="dark">Edit</Button>{' '}
        <Button variant="dark">Delete</Button>
        </div>
      </Form>
    </Container>
  );
};

export default UserAccount;
