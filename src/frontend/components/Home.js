import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';

import ProductCard from './Product/ProductCard';
import UserProfile from './User/UserProfile';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}product/`);
      setProducts(res.data);
    })();
  }, []);

  return (
    <Container className='my-3'>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {products.map((product, index) => (
          <ProductCard product={{ ...product }} key={index} />
        ))}
      </Row>
    </Container>
  );
};

export default Home;
