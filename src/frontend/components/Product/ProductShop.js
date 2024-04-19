import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';

import ProductCard from '../../containers/Product/ProductCard';

const ProductShop = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}product/`);
        setProducts(res.data);
      } catch (err) {}
    })();
  }, []);

  return (
    <Container className='my-3'>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {products.map((product, index) => (
          <ProductCard
            product={{ ...product }}
            key={index}
            user={props.user}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ProductShop;
