import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardTitle,
  Col,
  Container,
  ListGroup,
  Row,
} from 'react-bootstrap';

import CartProducts from './CartProducts';

const CartView = ({ user, cart, setCart }) => {
  const [productIds, setProductIds] = useState([]);
  const [cartProduct, setCartProduct] = useState({ product_id: '' });

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}cart__product/${cart.id}`
      );
      setProductIds(res.data);
    })();
  }, [cart.id]);

  useEffect(() => {
    if (cartProduct.product_id) {
    (async () => {
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}cart__product/${cart.id}`, cartProduct
      )
    })()
  };
  }, [productIds]);

  const handleQuantityChange = (newQuantity, productId, idx) => {
    setProductIds(
      [...productIds].map((object) => {
        if (object.ProductId === productId) {
          return {
            ...object,
            quantity: parseInt(newQuantity),
          };
        } else return object;
      })
    );
    setCartProduct({ cart_id: cart.id, product_id: productId, quantity: newQuantity })
  };
  console.log(...productIds);
  // console.log(cart);
  // console.log(user);
  // console.log(productIds);

  return (
    <Container className='py-5'>
      <Card>
        <Row>
          <Col>
            <Row className='m-2'>
              <Col>
                <CardTitle>Shopping Cart</CardTitle>
              </Col>
              <Col className='align-self-center text-end text-muted'>
                ${cart.total_price}
              </Col>
            </Row>
          </Col>
          <ListGroup className='px-3'>
            {productIds.map((row, idx) => {
              return (
                <CartProducts
                  productId={row.ProductId}
                  quantity={row.quantity}
                  handleQuantityChange={handleQuantityChange}
                  idx={idx}
                  key={row.createdAt}
                />
              );
            })}
          </ListGroup>
          <Row>Display</Row>
        </Row>
      </Card>
    </Container>
  );
};

export default CartView;
