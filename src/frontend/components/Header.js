import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header className='bg-dark py-1'>
      <Container className='px-4 px-lg-5 my-5'>
        <div className='text-center text-white'>
          <h1 className='display-4 fw-bolder'>The Walk-In</h1>
          <p className='lead fw-normal text-white-50 mb-0'>
            do all of your restaurant's orders in one place
          </p>
        </div>
      </Container>
    </header>
  );
}

export default Header