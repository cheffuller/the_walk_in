import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';

const ProductEdit = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `http://localhost:8080/api/product/${productId}`
      );
      setProduct(res.data);
    })();
  }, [productId]);

  return (
    <Container className='px-4 px-lg-5 my-5'>
      <h5 className='text-center text-black'>Product Information</h5>
      <Form>
        <Form.Group className='mb-3' controlId='productLabel'>
          <Form.Label>Label</Form.Label>
          <Form.Control type='text' placeholder={product.label} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productName'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder={product.name} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productCategory'>
          <Form.Label>Category</Form.Label>
          <Form.Control type='text' placeholder={product.category} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productPhoto'>
          <Form.Label>Image Link</Form.Label>
          <Form.Control type='text' placeholder={product.photo} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productDescription'>
          <Form.Label>Description</Form.Label>
          <Form.Control as='textarea' rows={4} placeholder={product.description} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productPrice'>
          <Form.Label>Price</Form.Label>
          <Form.Control type='number' placeholder={product.price} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productPackSize'>
          <Form.Label>Pack Size</Form.Label>
          <Form.Control type='text' placeholder={product.pack_size} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productWeightValue'>
          <Form.Label>Weight Value</Form.Label>
          <Form.Control type='number' placeholder={product.weight_value} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productWeightUnit'>
          <Form.Label>Pack Size</Form.Label>
          <Form.Control type='text' placeholder={product.weight_unit} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productNutritionInfo'>
          <Form.Label>Nutrition Info</Form.Label>
          <Form.Control as='textarea' rows={4} placeholder={product.nutrition_info} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productVendor'>
          <Form.Label>Vendor</Form.Label>
          <Form.Control type='text' placeholder='Vendor' />
        </Form.Group>
        <div className='text-center'>
        <Button variant="dark">Submit</Button>{' '}
        <Button variant="dark">Delete</Button>
        </div>
      </Form>
    </Container>
  );
};

export default ProductEdit;
