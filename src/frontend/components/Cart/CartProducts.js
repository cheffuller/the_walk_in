// Importing necessary dependencies from React and Axios
import { useEffect, useState } from 'react';
import axios from 'axios';

// Importing specific components from React Bootstrap
import { Col, Form, FormControl, ListGroupItem, Row } from 'react-bootstrap';

// Importing currencyFormat function from custom library
import { currencyFormat } from '../../lib/currencyFormat';

// Functional component CartProducts
const CartProducts = ({ productId, quantity, handleQuantityChange, idx }) => {
  // State to hold product information
  const [product, setProduct] = useState({ name: '' });
  const [vendor, setVendor] = useState('');

  // Effect hook to fetch product information when productId changes
  useEffect(() => {
    (async () => {
      try {
        // Fetching product data from API using productId
        if (productId) {
          const res = await axios.get(
            `${process.env.REACT_APP_API_URL}product/${productId}`
          );
          // Setting product state with fetched data
          setProduct(res.data);
        }
      } catch (err) {
        // Handling errors
      }
    })();
  }, [productId]);

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

  // DisplayRow component to render product information
  const DisplayRow = () => {
    // Checking if product name is available
    if (product.name) {
      return (
        // Rendering product details in a list group item
        <ListGroupItem>
          <Row>
            <Col className='align-self-center'>{product.name}</Col>
            <Col className='text-center align-self-center'>
              {/* Displaying formatted product price */}
              {currencyFormat(Number(product.price))}
            </Col>
            <Col className='align-self-center'>
              {/* Form to update product quantity */}
              <Form>
                <FormControl
                  className='text-center'
                  style={{width:"60px", margin:"0 auto"}}
                  type='number'
                  defaultValue={quantity}
                  onChange={(e) =>
                    // Handling quantity change event
                    handleQuantityChange(
                      product.id,
                      e.target.value,
                      idx,
                      quantity,
                      product.price
                    )
                  }
                />
              </Form>
            </Col>
            <Col className='align-self-center text-center'>{vendor.name}</Col>
            <Col className='itemTotal text-end align-self-center'>
              {/* Displaying formatted total price */}
              {currencyFormat(product.price * quantity)}
            </Col>
          </Row>
        </ListGroupItem>
      );
    }
  };

  // Returning the DisplayRow component
  return <DisplayRow />;
};

// Exporting the CartProducts component as default
export default CartProducts;
