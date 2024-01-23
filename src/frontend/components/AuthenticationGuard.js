import { withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Circles } from 'react-loader-spinner';

export const AuthenticationGuard = ({ cart, setCart, user, component, table, appUser }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <Container className='m-5'>
        <Circles color='black' ariaLabel='circles-loading' />
      </Container>
    ),
  });
  return <Component cart={cart} setCart={setCart} user={user} table={table} appUser={appUser} />;
};
