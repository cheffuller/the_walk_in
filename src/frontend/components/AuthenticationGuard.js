import { withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Circles } from 'react-loader-spinner';

export const AuthenticationGuard = ({ user, component, table }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <Container className='m-5'>
        <Circles color='black' ariaLabel='circles-loading' />
      </Container>
    ),
  });
  return <Component user={user} table={table} />;
};
