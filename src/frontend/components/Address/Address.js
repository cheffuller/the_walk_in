import { Form } from "react-bootstrap";

const Address = () => {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='companyAddLineOne'>
        <Form.Label>Address Line 1</Form.Label>
        <Form.Control type='text' placeholder='Enter address line 1' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='companyAddLineTwo'>
        <Form.Label>Address Line 2</Form.Label>
        <Form.Control type='text' placeholder='Enter address line 2' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='companyAddCity'>
        <Form.Label>City</Form.Label>
        <Form.Control type='text' placeholder='Enter city' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='companyAddState'>
        <Form.Label>State</Form.Label>
        <Form.Control type='text' placeholder='Enter state' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='companyAddZip'>
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type='text' placeholder='Enter zip code' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='companyAddDel'>
        <Form.Label>Delivery</Form.Label>
        <Form.Check type='checkbox' label='check if delivery address'/>
      </Form.Group>
    </Form>
  );
};

export default Address