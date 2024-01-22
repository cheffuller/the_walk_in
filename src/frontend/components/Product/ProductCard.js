import axios from 'axios';
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

const ProductCard = ({ product, user, cart, setCart }) => {
  const createCartId = async () => {
    console.log(cart);
    const res = await axios.post(`${process.env.REACT_APP_API_URL}cart/`, cart);
    console.log(res);
    return res.data.id;
  };

  const handleClick = async () => {
    const newQuantity = cart.item_quantity + 1
    setCart({ ...cart, item_quantity: newQuantity })
    if (!cart.id) {
      setCart({ ...cart, id: await createCartId() });

      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}cart__product`,
        { cart_id: cart.id, product_id: product.id }
      );
      console.log(res);
    } else {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}cart__product`,
        { cart_id: cart.id, product_id: product.id }
      );
      console.log(res);
    }
  };

  return (
    <Col>
      <Card className='text-center'>
        <Card.Img variant='top' src={product.photo} style={styles.cardImage} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.label}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>${product.price}</Card.Text>
          <Button variant='secondary' href={`product/${product.id}`}>
            Show Details
          </Button>
          {/* <Button as='a' */}
          <br />
          <Button variant='dark' className='mt-2' onClick={handleClick}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
