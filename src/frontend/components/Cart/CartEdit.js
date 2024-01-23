import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';

import { handleEditChange } from '../../lib/handleEditChange';
import DeleteButton from '../../lib/DeleteButton';
import EditMessage from '../../lib/EditMessage';

const CartEdit = ({ user }) => {
  const { cartId } = useParams();
  const [cart, setCart] = useState({
    item_quantity: '',
    total_price: '',
    status: '',
  });
  const [message, setMessage] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}cart/${cartId}`
        );
        setCart(res.data);
      } catch (err) {}
    })();
  }, [cartId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}cart/${cart.id}`,
        cart
      );
      setMessage(res.data.message);
    } catch (err) {}
  };

  return (
    <Container className='px-4 px-lg-5 my-5'>
      <h5 className='text-center text-black'>Cart Information</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='cartName'>
          <Form.Label>Item Quantity</Form.Label>
          <Form.Control
            type='text'
            value={cart.item_quantity}
            onChange={handleEditChange(cart, 'item_quantity', setCart)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='vendorPhone'>
          <Form.Label>Total Price</Form.Label>
          <Form.Control
            type='text'
            value={cart.total_price}
            onChange={handleEditChange(cart, 'total_price}', setCart)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='vendorContact'>
          <Form.Label>Status</Form.Label>
          <Form.Control
            type='text'
            value={cart.status}
            onChange={handleEditChange(cart, 'status', setCart)}
          />
        </Form.Group>
        <div className='text-center'>
          <Button variant='dark' type='submit'>
            Update Cart
          </Button>{' '}
          <DeleteButton user={user} />
        </div>
        <EditMessage message={message} />
      </Form>
    </Container>
  );
};

export default CartEdit;
