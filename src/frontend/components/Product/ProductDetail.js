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

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [vendor, setVendor] = useState([]);

  const getVendor = async (vendor_id) => {
    const res = await axios.get(
      `http://localhost:8080/api/vendor/${vendor_id}`
    );
    setVendor(res.data);
  };

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `http://localhost:8080/api/product/${productId}`
      );
      setProduct(res.data);
      getVendor(res.data.vendor_id);
    })();
  }, [productId]);

  return (
    <Container>{console.log(vendor)}
      <Row>
        <Col>
          <Card className='mt-3'>
            <CardImg src={product.photo}></CardImg>
          </Card>
        </Col>
        <Col xs={8}>
          <Card className='text-center m-3'>
            <CardBody>
                <CardSubtitle>from {vendor.name}</CardSubtitle>
              <CardHeader>
                <CardTitle>{product.name} </CardTitle>
                {product.label}
              </CardHeader>
              
              <CardBody>
                <CardText>{product.category}</CardText>
                <CardText>{product.description}</CardText>
                <CardText>{product.pack_size}</CardText>
                <CardText>
                  {product.weight_value} {product.weight_unit}
                </CardText>
                <CardText>{product.nutrition_info}</CardText>
              </CardBody>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className='text-center m-3'>
            <Button variant='secondary' disabled>
              ${product.price}
            </Button>
            <Button variant='dark'>
              Add to Cart
            </Button>

{/* import { updateCart } from './lib.js';

function AddToCart({productId}) {
  async function addToCart(formData) {
    'use server'
    const productId = formData.get('productId')
    await updateCart(productId)
  }
  return (
    <form action={addToCart}>
        <input type="hidden" name="productId" value={productId} />
        <button type="submit">Add to Cart</button>
    </form>

  );
} */}

            <Link to={`/products/edit/${productId}`} variant='secondary'>
              Edit Product
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;