import { withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Circles } from 'react-loader-spinner';

export const AuthenticationGuard = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <Container>
        <Circles color='black' ariaLabel='circles-loading' />
      </Container>
    ),
  });

  return <Component />;
};
