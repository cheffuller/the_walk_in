import { Form } from "react-bootstrap";

const Delivery = () => {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='deliveryDate'>
        <Form.Label>Delivery Date</Form.Label>
        <Form.Control type='date' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='deliveryStart'>
        <Form.Label>Delivery Start Time</Form.Label>
        <Form.Control type='time' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='deliveryEnd'>
        <Form.Label>Delivery End Time</Form.Label>
        <Form.Control type='time' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='deliveryInstructions'>
        <Form.Label>Delivery Instructions</Form.Label>
        <Form.Control as='textarea' rows={3} placeholder='Enter delivery instructions' />
      </Form.Group>
    </Form>
  );
};

export default Delivery