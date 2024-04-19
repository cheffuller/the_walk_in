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

const CartView = (props) => {
  const [productIds, setProductIds] = useState([]);
  const [cartProduct, setCartProduct] = useState({ product_id: '' });

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}cart__product/${props.cart.id}`
        );
        setProductIds(res.data);
      } catch (err) {}
    })();
  }, [props]);

  useEffect(() => {
    if (cartProduct.product_id) {
      (async () => {
        try {
          await axios.put(
            `${process.env.REACT_APP_API_URL}cart__product/${props.cart.id}`,
            cartProduct
          );
        } catch (err) {}
      })();
    }
  }, [productIds, cartProduct, props]);

  const handleQuantityChange = (
    newQuantity,
    productId,
    idx,
    prevQuantity,
    price
  ) => {

    const quantityChange = parseInt(newQuantity) - parseInt(prevQuantity);

    setProductIds(
      [...productIds].map((obj) => {
        if (obj.ProductId === productId) {
          return {
            ...obj,
            quantity: parseInt(newQuantity),
          };
        } else return obj;
      })
    );

    setCartProduct({
      cart_id: props.cart.id,
      product_id: productId,
      quantity: newQuantity,
    });

    const priceChange = quantityChange * price;
    props.updateCart(quantityChange, priceChange);
  };

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
                Testing
              </Col>
            </Row>
          </Col>
          <ListGroup className='p-3'>
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
        </Row>
        <Row className='m-2'>
          <Col>
            <CardTitle>Shopping Cart</CardTitle>
          </Col>
          <Col className='align-self-center text-end text-muted'>
            {currencyFormat(props.cart.total_price)}
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default CartView;
