import { Button, Container, Form } from 'react-bootstrap';

const VendorAccount = () => {
  return (
    <Container className='px-4 px-lg-5 my-5'>
      <h5 className='text-center text-black'>Vendor Information</h5>
      <Form>
        <Form.Group className='mb-3' controlId='vendorName'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Enter vendor name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='vendorPhone'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type='tel' placeholder='Enter vendor phone number' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='vendorEmail'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type='email' placeholder='Enter vendor email address' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='vendorContact'>
          <Form.Label>Contact Name</Form.Label>
          <Form.Control type='text' placeholder='Enter vendor contact name' />
        </Form.Group>
        <div className='text-center'>
          <Button variant='dark'>Edit</Button>{' '}
          <Button variant='dark'>Delete</Button>
        </div>
      </Form>
    </Container>
  );
};

export default VendorAccount;
