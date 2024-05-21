import { useEffect } from 'react';
import axios from 'axios';
import {
  Card,
  CardTitle,
  Col,
  Container,
  ListGroup,
  Row,
} from 'react-bootstrap';

import CartProducts from '../../containers/Cart/CartProducts';
import CartCheckout from './CartCheckout';
import { currencyFormat } from '../../lib/currencyFormat';

const CartView = ({
  cart,
  updateCart,
  cartProducts,
  fetchCartProducts,
  updateCartProducts,
  user
}) => {
  const invoices = {};

  useEffect(() => {
    try {
      fetchCartProducts(cart.id);
    } catch (err) {}
  }, [fetchCartProducts, cart.id]);

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
    updateCart(quantityChange, priceChange);

    if (Number(newQuantity) === 0) {
      try {
        axios.delete(`${process.env.REACT_APP_API_URL}cart__product/`, {
          data: {
            cart_id: cart.id,
            product_id: productID,
          },
        });
        axios.put(`${process.env.REACT_APP_API_URL}cart/${cart.id}`, {
          quantity: quantityChange,
          price: priceChange,
        });
      } catch (err) {}
    } else {
      try {
        axios.put(`${process.env.REACT_APP_API_URL}cart__product/`, {
          cart_id: cart.id,
          product_id: productID,
          quantity: newQuantity,
        });
        axios.put(`${process.env.REACT_APP_API_URL}cart/${cart.id}`, {
          quantity: quantityChange,
          price: priceChange,
        });
      } catch (err) {}
    }
  };

  return (
    <Container className='py-5'>
      <Card>
        <Row>
          <Col>
            <Row className='mx-1 mt-3'>
              <Col>
                <CardTitle>Shopping Cart</CardTitle>
              </Col>
            </Row>
          </Col>
          <ListGroup className='px-3'>
            <Row className='p-3'>
              <Col className='align-self-center fw-bold'>Product</Col>
              <Col className='text-center align-self-center fw-bold'>
                Product Price
              </Col>
              <Col className='text-center align-self-center fw-bold'>
                Quantity
              </Col>
              <Col className='align-self-center text-center fw-bold'>
                Vendor Name
              </Col>
              <Col className='text-end align-self-center fw-bold'>Total</Col>
            </Row>

            {cartProducts.map((cartProduct, idx) => {
              return (
                <CartProducts
                  productId={cartProduct.ProductId}
                  quantity={cartProduct.quantity}
                  handleQuantityChange={handleQuantityChange}
                  idx={idx}
                  key={idx}
                  invoices={invoices}
                />
              );
            })}
          </ListGroup>
        </Row>
        <Row className='m-2'>
          <Col></Col>
          <Col className='align-self-center text-end text-muted'>
            <p className='fw-bold'>{currencyFormat(cart.total_price)}</p>
          </Col>
        </Row>
        <Row>
          <Col className='text-end align-self-center fw-bold'>
            <CartCheckout invoices={invoices} user={user} />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default CartView;
