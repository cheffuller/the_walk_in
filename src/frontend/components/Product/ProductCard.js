import { Button, Card, Col } from 'react-bootstrap';

const styles = {
  cardImage: {
    margin: 'auto',
    padding: '5px',
    objectFit: 'scale-down',
    width: '100%',
    height: '10em',
  },
};

const ProductCard = ({ product }) => {
  return (
    <Col>
      <Card className='text-center'>
        <Card.Img variant='top' src={product.photo} style={styles.cardImage} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.label}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>${product.price}</Card.Text>
          <Button variant='secondary' href={`product/${product.id}`}>Show Details</Button>
          {/* <Button as='a' */}
          <br />
          <Button variant='dark' className='mt-2'>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;