import { Container } from 'react-bootstrap';

const Header = () => {
  return (
      <header className='py-4 walk-in'>
        <Container className='px-4 px-lg-5 my-5'>
          <div className='text-center text-white'>
            <h1 className='display-4 fw-bolder'>The Walk-In</h1>
            <p className='lead fw-normal mb-0'>
              all of your restaurant's orders in one place
            </p>
          </div>
        </Container>
      </header>
  );
};

export default Header;
