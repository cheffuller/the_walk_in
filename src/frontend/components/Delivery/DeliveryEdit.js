import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';

import { handleEditChange } from '../../lib/handleEditChange';
import DeleteButton from '../../lib/DeleteButton';
import EditMessage from '../../lib/EditMessage';

const DeliveryEdit = ({ user }) => {
  const { deliveryId } = useParams();
  const [delivery, setDelivery] = useState({
    date: '',
    start: '',
    end: '',
    instructions: '',
  });
  const [message, setMessage] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}delivery/${deliveryId}`
        );
        setDelivery(res.data);
      } catch (err) {}
    })();
  }, [deliveryId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      `${process.env.REACT_APP_API_URL}delivery/${delivery.id}`,
      delivery
    );
    setMessage(res.data.message);
  };

  const convertDate = (date) => {
    if (date) {
      const newDate = new Date(date);
      const formatYear = newDate.getFullYear();
      const formatMonth =
        newDate.getMonth() + 1 < 10
          ? `0${newDate.getMonth() + 1}`
          : newDate.getMonth() + 1;
      const formatDay =
        newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();
      const formattedDate = `${formatYear}-${formatMonth}-${formatDay}`;
      return formattedDate;
    }
  };

  const handleDateEditChange = (object, key, setState) => {
    return (e) => {
      const formattedDate = `${e.target.value}T00:00:00`;
      setState({ ...object, [key]: formattedDate });
    };
  };

  return (
    <Container className='px-4 px-lg-5 my-5'>
      <h5 className='text-center text-black'>Delivery Information</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='deliveryDate'>
          <Form.Label>Delivery Date</Form.Label>
          <Form.Control
            type='date'
            value={convertDate(delivery.date)}
            onChange={handleDateEditChange(delivery, 'date', setDelivery)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='deliveryStart'>
          <Form.Label>Delivery Start Time</Form.Label>
          <Form.Control
            type='time'
            value={delivery.start}
            onChange={handleEditChange(delivery, 'start', setDelivery)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='deliveryEnd'>
          <Form.Label>Delivery End Time</Form.Label>
          <Form.Control
            type='time'
            value={delivery.end}
            onChange={handleEditChange(delivery, 'end', setDelivery)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='deliveryInstructions'>
          <Form.Label>Delivery Instructions</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            value={delivery.instructions}
            onChange={handleEditChange(delivery, 'instructions', setDelivery)}
          />
        </Form.Group>
        <div className='text-center'>
          <Button variant='dark' type='submit'>
            Update Delivery
          </Button>{' '}
          <DeleteButton user={user} />
        </div>
        <EditMessage message={message} />
      </Form>
    </Container>
  );
};

export default DeliveryEdit;
