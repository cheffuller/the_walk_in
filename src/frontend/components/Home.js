import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';

import ProductCard from './ProductCard';
import UserProfile from './UserProfile';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get('http://localhost:8080/api/product/');
      setProducts(res.data);
    })();
  }, []);

  return (
    <Container fluid>
        <UserProfile />
      <Row xs={1} md={2} lg={3} className='g-4'>
        {products.map((product, index) => (
          <ProductCard product={{ ...product }} key={index} />
        ))}
      </Row>
    </Container>
  );
};

export default Home;
