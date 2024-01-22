import { Card, Container } from 'react-bootstrap';

const Home = ({ user, cart, setCart }) => {
  
  return (
    <Container className='my-3'>
      <Card>
        <Card.Title className='text-center m-3'>
          Hello and Welcome to The Walk-In!
        </Card.Title>
        <Card.Body>
          <p>
            This is a personal project written for my ACA Capstone App. The
            overall project goal is to provide an application that can be used
            by restaurant management to place orders for multiple vendors in one
            application, which will then seperate and send the orders to the
            proper vendors.
          </p>
          <p>
            The functionality to fulfill this idea is still under construction
            but we do have a usable website with authentication and
            authorization provided by Auth0.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
