import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

import { handleEditChange } from '../../lib/handleEditChange';
import EditMessage from '../../lib/EditMessage';

const AdminCreateProduct = ({ user }) => {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState({
    label: '',
    name: '',
    category: '',
    photo: '',
    description: '',
    price: '',
    pack_size: '',
    weight_value: '',
    weight_unit: '',
    nutrition_info: '',
  });
  const [vendors, setVendors] = useState([]);
  const [message, setMessage] = useState();
  const handleClose = () => {
    setProduct({
      label: '',
      name: '',
      category: '',
      photo: '',
      description: '',
      price: '',
      pack_size: '',
      weight_value: '',
      weight_unit: '',
      nutrition_info: '',
    });
    setMessage('');
    setShow(false);
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}vendor`);
      setVendors(res.data);
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (product.name) {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}product/`,
        product
      );
      res.statusText === 'OK'
        ? setMessage('Product successfully created')
        : setMessage('Something went wrong...');
    }
  };
  return (
    <>
      {' '}
      <Button variant='secondary' onClick={handleShow}>
        Create Product
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='productVendor'>
              <Form.Label>Vendor</Form.Label>
              <Form.Control
                as='select'
                value={product.vendor_id}
                onChange={handleEditChange(product, 'vendor_id', setProduct)}
              >
                <option>Choose One:</option>
                {vendors.map((row) => {
                  return (
                    <option key={row.id} value={row.id}>
                      {row.name}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='productLabel'>
              <Form.Label>Label</Form.Label>
              <Form.Control
                type='text'
                value={product.label}
                onChange={handleEditChange(product, 'label', setProduct)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='productName'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                value={product.name}
                onChange={handleEditChange(product, 'name', setProduct)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='productCategory'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type='text'
                value={product.category}
                onChange={handleEditChange(product, 'category', setProduct)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='productPhoto'>
              <Form.Label>Image Link</Form.Label>
              <Form.Control
                type='text'
                value={product.photo}
                onChange={handleEditChange(product, 'photo', setProduct)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='productDescription'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                rows={4}
                value={product.description}
                onChange={handleEditChange(product, 'description', setProduct)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='productPrice'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                step='any'
                value={product.price}
                onChange={handleEditChange(product, 'price', setProduct)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='productPackSize'>
              <Form.Label>Pack Size</Form.Label>
              <Form.Control
                type='text'
                value={product.pack_size}
                onChange={handleEditChange(product, 'pack_size', setProduct)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='productWeightValue'>
              <Form.Label>Weight Value</Form.Label>
              <Form.Control
                type='number'
                value={product.weight_value}
                onChange={handleEditChange(product, 'weight_value', setProduct)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='productWeightUnit'>
              <Form.Label>Weight Unit</Form.Label>
              <Form.Control
                type='text'
                value={product.weight_unit}
                onChange={handleEditChange(product, 'weight_unit', setProduct)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='productNutritionInfo'>
              <Form.Label>Nutrition Info</Form.Label>
              <Form.Control
                as='textarea'
                rows={4}
                value={product.nutrition_info}
                onChange={handleEditChange(
                  product,
                  'nutrition_info',
                  setProduct
                )}
              />
            </Form.Group>
            <div className='text-center'>
              <Button variant='dark' type='submit'>
                Create Product
              </Button>
            </div>
            <EditMessage message={message} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdminCreateProduct;
