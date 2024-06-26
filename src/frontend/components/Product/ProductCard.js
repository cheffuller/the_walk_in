import { useEffect, useState } from 'react';
import axios from 'axios';

import { Button, Card, Col } from 'react-bootstrap';

import { currencyFormat } from '../../lib/currencyFormat';

const styles = {
  cardImage: {
    margin: 'auto',
    padding: '5px',
    objectFit: 'scale-down',
    width: '100%',
    height: '10em',
  },
};

const ProductCard = ({ product, cart, updateCart }) => {
  const [vendor, setVendor] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}vendor/${product.vendor_id}`
        );
        setVendor(res.data);
      } catch (err) {}
    })();
  }, [product]);

  const handleClick = async () => {
    updateCart(1, product.price, cart.id);
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}cart__product`, {
        cart_id: cart.id,
        product_id: product.id,
      });
    } catch (err) {}
  };

  return (
    <Col>
      <Card className='text-center'>
        <Card.Text className='mt-2 fw-bold'>{vendor.name}</Card.Text>
        <Card.Img variant='top' src={product.photo} style={styles.cardImage} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text className='fs-5'>
            {currencyFormat(Number(product.price))}
          </Card.Text>
          <Button variant='secondary' href={`product/${product.id}`}>
            Show Details
          </Button>
          <br />
          <Button
            type='button'
            variant='dark'
            className='mt-2'
            onClick={handleClick}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
