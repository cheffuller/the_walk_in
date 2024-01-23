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
            application, which will then separate and send the orders to the
            proper vendors.
          </p>
          <p>
            The functionality to fulfill this idea is still under construction
            but we do have a usable website with authentication and
            authorization provided by Auth0.
          </p>
          <p>
            Most of the users have carts that are seeded with dummy info that is
            not reflective of the actual items in the carts.
          </p>
          <p>
            The Walk-In users table is not yet tied to the Auth0 accounts (I ran
            into an issue with creating a new Walk-In account based on a new
            Auth0 account that I still haven't worked through yet.) You may
            select a Walk-In account to use, the thewalkintester account has
            admin privileges.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
