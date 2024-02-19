import { Card, Col, Container, Image, Row } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className='my-3'>
        <Card className='mb-3'>
        <Card.Body>
          <Row>
            <Col className='m-auto'>
              <Image src='../../images/walk_in_img_3.jpeg' fluid rounded />
            </Col>
            <Col className='m-auto'>
              <p className='text-center'>
                This is a personal project written for my ACA Capstone App. The
                overall project goal is to provide an application that can be
                used by restaurant management to place orders for multiple
                vendors in one application, which will then separate and send
                the orders to the proper vendors.
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className='mb-3'>
        <Card.Body>
          <Row>
            <Col className='m-auto'>
              <p className='text-center'>
                The functionality to fulfill this idea is still under
                construction but we do have a usable website with authentication
                and authorization provided by AuthO.
              </p>
              <p className='text-center'>
                Most of the users have carts that are seeded with dummy info
                that is not reflective of the actual items in the carts.
              </p>
            </Col>
            <Col className='m-auto'>
              <Image src='../../images/walk_in_img_2.jpeg' fluid rounded />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Row>
            <Col className='m-auto'>
              <Image src='../../images/walk_in_img_4.jpeg' fluid rounded />
            </Col>
            <Col className='m-auto'>
              <p className='text-center'>
                The Walk-In users table is not yet tied to the Auth0 accounts.
                You may select a Walk-In account to use, thewalkintester account
                has super admin privileges.
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
