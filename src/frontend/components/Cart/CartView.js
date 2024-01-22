import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardTitle, Col, Container, Row } from 'react-bootstrap';

import CartProducts from './CartProducts';

const CartView = ({ user, cart, setCart }) => {
  const [productIds, setProductIds] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}cart__product/${cart.id}`
      );
      setProductIds(res.data);
    })();
  }, [cart.id, setProductIds]);

  console.log(cart);
  console.log(user);
  console.log(productIds);

  return (
    <Container className='py-5'>
      <Card>
        <Row>
          <Col className='col-md-8'>
            <Row>
              <Col>
                <CardTitle>Shopping Cart</CardTitle>
              </Col>
              <Col className='col align-self-center text-end text-muted'>
                {cart.total_price}
              </Col>
            </Row>
          </Col>
          <Col className='col-md-4'>Summary</Col>
          <Row></Row>
          {productIds.map((row) => {
            return (
              <CartProducts
                productId={row.ProductId}
                quantity={row.quantity}
                key={row.createdAt}
              />
            );
          })}
          <Row>Display</Row>
        </Row>
      </Card>
    </Container>
  );
};

export default CartView;
