import React from 'react';
import { useAuth0, User } from '@auth0/auth0-react';

export default function ProfilePage() {
  const { user, isAuthenticated, isLoading } = useAuth0<User>();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {isAuthenticated && 'Please log in ...'}
      {isAuthenticated && (
        <div>
          <img src={user?.picture} alt={user?.name} />
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
        </div>
      )}
    </>
  );
}