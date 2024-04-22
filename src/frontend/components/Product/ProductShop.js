import { Container, Row } from 'react-bootstrap';

import ProductCard from '../../containers/Product/ProductCard';

const ProductShop = ({ products }) => {

  return (
    <Container className='my-3'>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {products.map((product, index) => (
          <ProductCard
            product={product}
            key={index}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ProductShop;
