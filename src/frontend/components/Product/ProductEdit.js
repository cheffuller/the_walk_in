import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';

import { handleEditChange } from '../../lib/handleEditChange';
import DeleteButton from '../../lib/DeleteButton';
import EditMessage from '../../lib/EditMessage';

const ProductEdit = ({ user }) => {
  console.log(user)
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      `http://localhost:8080/api/product/${product.id}`, product
    );
    setMessage(res.data.message)
  };

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
            onChange={handleEditChange(product, 'label', setProduct)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productName'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            value={product.name}
            onChange={handleEditChange(product, 'name', setProduct)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productCategory'>
          <Form.Label>Category</Form.Label>
          <Form.Control
            type='text'
            value={product.category}
            onChange={handleEditChange(product, 'category', setProduct)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productPhoto'>
          <Form.Label>Image Link</Form.Label>
          <Form.Control
            type='text'
            value={product.photo}
            onChange={handleEditChange(product, 'photo', setProduct)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productDescription'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as='textarea'
            rows={4}
            value={product.description}
            onChange={handleEditChange(product, 'description', setProduct)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productPrice'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type='number'
            value={product.price}
            onChange={handleEditChange(product, 'price', setProduct)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productPackSize'>
          <Form.Label>Pack Size</Form.Label>
          <Form.Control
            type='text'
            value={product.pack_size}
            onChange={handleEditChange(product, 'pack_size', setProduct)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productWeightValue'>
          <Form.Label>Weight Value</Form.Label>
          <Form.Control
            type='number'
            value={product.weight_value}
            onChange={handleEditChange(product, 'weight_value', setProduct)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productWeightUnit'>
          <Form.Label>Weight Unit</Form.Label>
          <Form.Control
            type='text'
            value={product.weight_unit}
            onChange={handleEditChange(product, 'weight_unit', setProduct)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productNutritionInfo'>
          <Form.Label>Nutrition Info</Form.Label>
          <Form.Control
            as='textarea'
            rows={4}
            value={product.nutrition_info}
            onChange={handleEditChange(product, 'nutrition_info', setProduct)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='productVendor'>
          <Form.Label>Vendor</Form.Label>
          <Form.Control type='text' placeholder='Vendor' />
        </Form.Group>
        <div className='text-center'>
          <Button type='submit' variant='dark'>
            Update Product
          </Button>{' '}
          <DeleteButton user={user} />
          {console.log(user)}
        </div>
        <EditMessage message={message} />
      </Form>
    </Container>
  );
};

export default ProductEdit;
