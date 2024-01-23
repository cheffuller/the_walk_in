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
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}cart__product/${cart.id}`
        );
        setProductIds(res.data);
      } catch (err) {}
    })();
  }, [cart.id]);

  useEffect(() => {
    if (cartProduct.product_id) {
      (async () => {
        try {
          await axios.put(
            `${process.env.REACT_APP_API_URL}cart__product/${cart.id}`,
            cartProduct
          );
        } catch (err) {}
      })();
    }
  }, [productIds, cart.id, cartProduct]);

  const PriceTotal = () => {
    const prices = Array.from(document.querySelectorAll('.itemTotal'));
    let sumPrices = 0;
    if (prices) {
      prices.map((col) => {
        sumPrices += Number(col.innerHTML.substring(1));
        return <></>
      });
    }
    return sumPrices;
  };

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
    setCartProduct({
      cart_id: cart.id,
      product_id: productId,
      quantity: newQuantity,
    });
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
                $
                <PriceTotal />
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
                  cart={cart}
                  setCart={setCart}
                />
              );
            })}
          </ListGroup>
        </Row>
      </Card>
    </Container>
  );
};

export default CartView;
