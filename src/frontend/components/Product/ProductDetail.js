import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from 'react-bootstrap';

import { currencyFormat } from '../../lib/currencyFormat';

const ProductDetail = ({ user, cart, setCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [vendor, setVendor] = useState([]);

  const createCartId = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}cart/`,
        cart
      );
      return res.data.id;
    } catch (err) {}
  };

  const handleClick = async () => {
    const newQuantity = cart.item_quantity + 1;
    setCart({ ...cart, item_quantity: newQuantity });
    if (!cart.id) {
      setCart({ ...cart, id: await createCartId() });
      try {
        await axios.post(`${process.env.REACT_APP_API_URL}cart__product`, {
          cart_id: cart.id,
          product_id: product.id,
        });
      } catch (err) {}
    } else {
      try {
        await axios.post(`${process.env.REACT_APP_API_URL}cart__product`, {
          cart_id: cart.id,
          product_id: product.id,
        });
      } catch (err) {}
    }
  };

  const getVendor = async (vendor_id) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}vendor/${vendor_id}`
      );
      setVendor(res.data);
    } catch (err) {}
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}product/${productId}`
        );
        setProduct(res.data);
        getVendor(res.data.vendor_id);
      } catch (err) {}
    })();
  }, [productId]);

  const style = {
    Link: {
      margin: 'auto 5px',
      color: 'inherit',
      textDecoration: 'inherit',
    },
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card className='mt-3'>
            <CardImg src={product.photo}></CardImg>
          </Card>
        </Col>
        <Col xs={8}>
          <Card className='text-center m-3'>
            <CardBody>
              <CardSubtitle className='mb-2'>Vendor - {vendor.name}</CardSubtitle>
              <CardHeader>
                <CardTitle>{product.name} </CardTitle>
                Label: {product.label}
              </CardHeader>

              <CardBody>
                <CardText>Category: {product.category}</CardText>
                <CardText>Description: {product.description}</CardText>
                <CardText>Pack Size: {product.pack_size}</CardText>
                <CardText>
                  Weight: {product.weight_value} {product.weight_unit}
                </CardText>
                <CardText>Nutrition Info: {product.nutrition_info}</CardText>
              </CardBody>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <div className='text-center m-3 border-none'>
            <h2>{currencyFormat(Number(product.price))}</h2>

            <Button className='mb-2' variant='dark' onClick={handleClick}>
              Add to Cart
            </Button>
          </div>
        </Col>
      </Row>
      <div className='d-flex justify-content-center'>
        <Button variant='secondary'>
          <Link to={`/product/edit/${productId}`} style={style.Link}>
            Edit Product
          </Link>
        </Button>
      </div>
    </Container>
  );
};

export default ProductDetail;
