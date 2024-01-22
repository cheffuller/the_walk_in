import { useEffect, useState } from 'react';
import axios from 'axios';

import { Col, Form, FormControl, ListGroupItem, Row } from 'react-bootstrap';

const CartProducts = ({ productId, quantity, handleQuantityChange, idx }) => {
  const [product, setProduct] = useState({ name: '' });
  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}product/${productId}`
      );
      setProduct(res.data);
    })();
  }, [productId]);
  // console.log(product);

  const DisplayRow = () => {
    if (product.name) {
      return (
        <ListGroupItem>
          <Row>
          <Col>{product.name}</Col>
          <Col className='text-center'>{product.price}</Col>
          <Col className='text-center'>
            <Form>
            <FormControl type='number' defaultValue={quantity} onChange={(e) => handleQuantityChange(e.target.value, product.id, idx)}/>
            
            </Form>
            </Col>
          <Col className='text-end'>${product.price * quantity}</Col>
          </Row>
        </ListGroupItem>
      );
    }
  };

  return <DisplayRow />;
};

export default CartProducts;
