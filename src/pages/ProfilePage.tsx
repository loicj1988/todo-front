import React, { useEffect } from 'react';
import { useAuth0, User } from '@auth0/auth0-react';

interface TodoUser extends User {
  username?: string;
}

export default function ProfilePage() {
  const { user, isAuthenticated, isLoading } = useAuth0<TodoUser>();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {!isAuthenticated && 'Please log in ...'}
      {isAuthenticated && (
        <div>
          <img src={user?.picture} alt={user?.name} />
          <h2>Welcome {user?.username}</h2>
          <p>{user?.email}</p>
        </div>
      )}
    </>
  );
}
