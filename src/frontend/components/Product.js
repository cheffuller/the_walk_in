import { Button, Container, Form } from 'react-bootstrap';

const Product = () => {
  return (
    <Container className='px-4 px-lg-5 my-5'>
      <h5 className='text-center text-black'>Product Information</h5>
      <Form>
        <Form.Group className='mb-3' controlId='productLabel'>
          <Form.Label>Label</Form.Label>
          <Form.Control type='text' placeholder='Enter product Label' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productName'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Enter product name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productCategory'>
          <Form.Label>Category</Form.Label>
          <Form.Control type='text' placeholder='Enter product category' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productImage'>
          <Form.Label>Image</Form.Label>
          <Form.Control type='file' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productDescription'>
          <Form.Label>Description</Form.Label>
          <Form.Control as='textarea' rows={4} placeholder='Enter product description' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productPrice'>
          <Form.Label>Price</Form.Label>
          <Form.Control type='number' placeholder='Enter product price' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productPackSize'>
          <Form.Label>Pack Size</Form.Label>
          <Form.Control type='text' placeholder='Enter product pack size' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productWeightValue'>
          <Form.Label>Weight Value</Form.Label>
          <Form.Control type='number' placeholder='Enter product weight value' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productWeightUnit'>
          <Form.Label>Pack Size</Form.Label>
          <Form.Control type='text' placeholder='Enter product weight unit' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productNutritionInfo'>
          <Form.Label>Nutrition Info</Form.Label>
          <Form.Control as='textarea' rows={4} placeholder='Enter product nutrition info' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productVendor'>
          <Form.Label>Vendor</Form.Label>
          <Form.Control type='text' placeholder='Vendor' />
        </Form.Group>
        <div className='text-center'>
        <Button variant="dark">Edit</Button>{' '}
        <Button variant="dark">Delete</Button>
        </div>
      </Form>
    </Container>
  );
};

export default Product;
