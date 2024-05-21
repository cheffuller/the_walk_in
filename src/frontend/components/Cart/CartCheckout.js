import { useEffect, useState } from 'react';
import axios from 'axios';

import { Accordion, Button, Col, Collapse, Row, Table } from 'react-bootstrap';

import { currencyFormat } from '../../lib/currencyFormat';

const CartCheckout = ({ invoices, user }) => {
  const [open, setOpen] = useState(false);
  const [company, setCompany] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [vendors, setVendors] = useState('');

  useEffect(() => {
    if (user && user.company_id) {
      (async () => {
        try {
          const res = await axios.get(
            `${process.env.REACT_APP_API_URL}company/${user.company_id}`
          );
          setCompany(res.data);
        } catch (err) {}
      })();
    }
  }, [user]);

  useEffect(() => {
    if (company && company.address_id) {
      (async () => {
        try {
          const res = await axios.get(
            `${process.env.REACT_APP_API_URL}address/${company.address_id}`
          );
          setCompanyAddress(res.data);
        } catch (err) {}
      })();
    }
  }, [company]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}vendor/`);
        setVendors(res.data);
      } catch (err) {}
    })();
  }, []);

  // Initialize an empty object to hold arrays for each vendor
  const vendorProducts = {};

  // Iterate through the products
  for (const key in invoices) {
    if (invoices.hasOwnProperty(key)) {
      const product = invoices[key];
      const vendorName = product.vendor;

      // Initialize the vendor array if it doesn't exist
      if (!vendorProducts[vendorName]) {
        vendorProducts[vendorName] = [];
      }

      if (!vendorProducts[vendorName].totalPrice) {
        vendorProducts[vendorName].totalPrice = 0;
      }

      if (!vendorProducts[vendorName].totalQuantity) {
        vendorProducts[vendorName].totalQuantity = 0;
      }

      // Add the product name to the vendor array
      vendorProducts[vendorName].push(product);
      vendorProducts[vendorName].totalPrice += Number(
        product.quantity * product.price
      );
      vendorProducts[vendorName].totalQuantity += product.quantity;
    }
  }

  const vendorContact = (vendor) => {
    if (vendors) {
      const foundVendor = vendors.find((element) => element.name === vendor);
      if (foundVendor) {
        return (
          <>
            <div>attn: {foundVendor.contact}</div>
            <div>{foundVendor.phone}</div>
            <div>{foundVendor.email}</div>
          </>
        );
      }
    }
    return null; // or undefined or any other default value if the vendor is not found
  };

  return (
    <>
      <Button
        className='m-2 fw-bold'
        variant='dark'
        onClick={() => setOpen(!open)}
      >
        Checkout
      </Button>
      <Collapse in={open}>
        <div className='m-3 text-start fw-normal'>
          {Object.keys(vendorProducts).map((vendor, index) => (
            <Accordion className='m-1' key={vendor}>
              <Accordion.Item eventKey={index.toString()}>
                <Accordion.Header>{vendor}</Accordion.Header>
                <Accordion.Body>
                  <h4>Purchase Order</h4>
                  <Row>
                    <Col>
                      <div>
                        <b>Ship to:</b>
                        <div>{company.name}</div>
                        <div>attn: {user.first_name} {user.last_name}</div>
                        <div>{companyAddress.line_1}</div>
                        <div>
                          {companyAddress.city}, {companyAddress.state}{' '}
                          {companyAddress.zip}
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <b>Vendor:</b>
                        <div>{vendor}</div>
                        {vendorContact(vendor)}
                      </div>
                    </Col>
                  </Row>
                  <Table striped hover className='mt-3'>
                    <thead>
                      <tr>
                        <th>Qty</th>
                        <th className='text-center'>Description</th>
                        <th className='text-center'>Unit Price</th>
                        <th className='text-end'>Total Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vendorProducts[vendor].map((product) => (
                        <tr key={product.id} className=''>
                          <td>{product.quantity}</td>
                          <td className='text-center'>{product.name}</td>
                          <td className='text-center'>${product.price}</td>
                          <td className='text-end'>
                            {currencyFormat(product.price * product.quantity)}
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td colSpan={2}>
                          Total Items: {vendorProducts[vendor].totalQuantity}
                        </td>
                        <td className='text-end' colSpan={2}>
                          {currencyFormat(vendorProducts[vendor].totalPrice)}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
        </div>
      </Collapse>
    </>
  );
};

export default CartCheckout;
