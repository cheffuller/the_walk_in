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
import { currencyFormat } from '../../lib/currencyFormat';

const CartView = ({
  cart,
  updateCart,
  products,
  cartProducts,
  fetchCartProducts,
  updateCartProducts,
}) => {
  useEffect(() => {
    try {
      fetchCartProducts(cart.id);
    } catch (err) {}
  }, [fetchCartProducts]);

  const handleQuantityChange = (
    productID,
    newQuantity,
    idx,
    prevQuantity,
    price
  ) => {
    const quantityChange = parseInt(newQuantity) - parseInt(prevQuantity);
    const priceChange = quantityChange * price;

    updateCartProducts(idx, newQuantity);

    if (Number(newQuantity) === 0) {
      try {
        axios.delete(`${process.env.REACT_APP_API_URL}cart__product/`, {
          data: {
            cart_id: cart.id,
            product_id: productID,
          },
        });
      } catch (err) {}
    } else {
      try {
        axios.put(`${process.env.REACT_APP_API_URL}cart__product/`, {
            cart_id: cart.id,
            product_id: productID,
            quantity: newQuantity,
        });
      } catch (err) {}
    }

    updateCart(quantityChange, priceChange);
  };

  console.log(cartProducts);

  return (
    <Container className='py-5'>
      <Card>
        <Row>
          <Col>
            <Row className='m-2'>
              <Col>
                <CardTitle>Shopping Cart</CardTitle>
              </Col>
              <Col className='align-self-center text-end text-muted'></Col>
            </Row>
          </Col>
          <ListGroup className='p-3'>
            {cartProducts.map((cartProduct, idx) => {
              return (
                <CartProducts
                  productId={cartProduct.ProductId}
                  quantity={cartProduct.quantity}
                  handleQuantityChange={handleQuantityChange}
                  idx={idx}
                  key={idx}
                />
              );
            })}
          </ListGroup>
        </Row>
        <Row className='m-2'>
          <Col></Col>
          <Col className='align-self-center text-end text-muted'>
            {currencyFormat(cart.total_price)}
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default CartView;
