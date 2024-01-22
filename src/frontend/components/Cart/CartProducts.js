import { useEffect, useState } from 'react';
import axios from 'axios';

import { Col, Row } from 'react-bootstrap';

const CartProducts = ({ productId, quantity }) => {
  const [product, setProduct] = useState({ name: '' });
  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}product/${productId}`
      );
      setProduct(res.data);
    })();
  }, [productId]);
  console.log(product);

  const DisplayRow = () => {
    if (product.name) {
      return (
        <Row>
          <Col>{product.name}</Col>
          <Col>{product.price}</Col>
          <Col>{quantity}</Col>
        </Row>
      );
    }
  };

  return <DisplayRow></DisplayRow>;
};

export default CartProducts;
