import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Container } from 'react-bootstrap';

import UserEdit from './UserEdit';

const UserProfile = ({ appUser }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className='text-center'>Loading ...</div>;
  }

  const Auth0Profile = () => {
    return (
      isAuthenticated && (
        <div>
          <h5 className='text-center text-black mb-3'><u>Auth0 Account Information</u></h5>
          <img src={user.picture} alt={user.name} />
          <h2>{user.nickname}</h2>
          <p>{user.email}</p>
        </div>
      )
    );
  };

  const WalkInProfile = () => {
    return (
      appUser && (
        <UserEdit userEditId={appUser.id} />
      )
    )
  }

  return (
    <Container className='text-center px-4 px-lg-5 my-5'>
      <Auth0Profile />
      <WalkInProfile />
    </Container>
  );
};

export default UserProfile;
