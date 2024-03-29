import { useEffect, useState } from 'react';
import axios from 'axios';

import { Col, Form, FormControl, ListGroupItem, Row } from 'react-bootstrap';

import { currencyFormat } from '../../lib/currencyFormat';

const CartProducts = ({ productId, quantity, handleQuantityChange, idx, cartTotal }) => {
  const [product, setProduct] = useState({ name: '' });
  cartTotal += product.price

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}product/${productId}`
        );
        setProduct(res.data);
      } catch (err) {}
    })();
  }, [productId]);

  const DisplayRow = () => {
    if (product.name) {
      return (
        <ListGroupItem>
          <Row>
            <Col className='align-self-center'>{product.name}</Col>
            <Col className='text-center align-self-center'>{currencyFormat(Number(product.price))}</Col>
            <Col className='text-center'>
              <Form>
                <FormControl
                  type='number'
                  defaultValue={quantity}
                  onChange={(e) =>
                    handleQuantityChange(e.target.value, product.id, idx)
                  }
                />
              </Form>
            </Col>
            <Col className='itemTotal text-end align-self-center'>
              {currencyFormat(product.price * quantity)}
            </Col>
          </Row>
        </ListGroupItem>
      );
    }
  };

  return <DisplayRow />;
};

export default CartProducts;
