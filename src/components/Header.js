import { Container } from 'react-bootstrap';

export default function Header() {
  return (
    <header>
      <Container className='px-4 px-lg-5 my-5'>
        <div class='text-center text-white'>
          <h1 class='display-4 fw-bolder'>The Walk-In - Testing</h1>
          <p class='lead fw-normal text-white-50 mb-0'>
            do all of your restaurant's orders in one place
          </p>
          <p class='lead fw-normal text-white-50 mb-0'>
            we are currently under construction and serving up dummy data
          </p>
        </div>
      </Container>
    </header>
  );
}
