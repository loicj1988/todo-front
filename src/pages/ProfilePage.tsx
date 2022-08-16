import React from 'react';
import { useAuth0, User } from '@auth0/auth0-react';
import { Container } from 'react-bootstrap';

export default function ProfilePage() {
  const { user } = useAuth0<User>();

  if (!user) {
    return <div>Something went wrong, please try again ...</div>;
  }

  return (
    <Container>
      <img src={user.picture} alt={user.name} />
      <h2>
        Welcome {user[`${process.env.REACT_APP_AUTH0_NAMESPACE}username`]}
      </h2>
      <p>{user.email}</p>
    </Container>
  );
}
