import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';

const ProductEdit = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({
    label: '',
    name: '',
    category: '',
    photo: '',
    description: '',
    price: '',
    pack_size: '',
    weight_value: '',
    weight_unit: '',
    nutrition_info: ''
  });
  const [message, setMessage] = useState()

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `http://localhost:8080/api/product/${productId}`
      );
      setProduct(res.data);
    })();
  }, [productId]);

  const handleChange = (name) => {
    return (e) => {
      setProduct({ ...product, [name]: e.target.value });
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      `http://localhost:8080/api/product/${product.id}`, product
    );
    setMessage(res.data.message)
  };

  const EditMessage = () => {
    if (message) { return (
      <div className='text-center mt-3' style={{ color: 'red'}}>
        {message}
      </div>
    ) }
  }

  return (
    <Container className='px-4 px-lg-5 my-5'>
      <h5 className='text-center text-black'>Product Information</h5>
      <Form onSubmit={handleSubmit}>
        {' '}
        <Form.Group className='mb-3' controlId='productLabel'>
          <Form.Label>Label</Form.Label>
          <Form.Control
            type='text'
            value={product.label}
            onChange={handleChange('label')}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productName'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            value={product.name}
            onChange={handleChange('name')}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productCategory'>
          <Form.Label>Category</Form.Label>
          <Form.Control
            type='text'
            value={product.category}
            onChange={handleChange('category')}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productPhoto'>
          <Form.Label>Image Link</Form.Label>
          <Form.Control
            type='text'
            value={product.photo}
            onChange={handleChange('photo')}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productDescription'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as='textarea'
            rows={4}
            value={product.description}
            onChange={handleChange('description')}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productPrice'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type='number'
            value={product.price}
            onChange={handleChange('price')}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productPackSize'>
          <Form.Label>Pack Size</Form.Label>
          <Form.Control
            type='text'
            value={product.pack_size}
            onChange={handleChange('pack_size')}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productWeightValue'>
          <Form.Label>Weight Value</Form.Label>
          <Form.Control
            type='number'
            value={product.weight_value}
            onChange={handleChange('weight_value')}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productWeightUnit'>
          <Form.Label>Weight Unit</Form.Label>
          <Form.Control
            type='text'
            value={product.weight_unit}
            onChange={handleChange('weight_unit')}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productNutritionInfo'>
          <Form.Label>Nutrition Info</Form.Label>
          <Form.Control
            as='textarea'
            rows={4}
            value={product.nutrition_info}
            onChange={handleChange('nutrition_info')}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productVendor'>
          <Form.Label>Vendor</Form.Label>
          <Form.Control type='text' placeholder='Vendor' />
        </Form.Group>
        <div className='text-center'>
          <Button type='submit' variant='dark'>
            Submit
          </Button>{' '}
          <Button variant='dark'>Delete</Button>
        </div>
        <EditMessage />
      </Form>
    </Container>
  );
};

export default ProductEdit;
