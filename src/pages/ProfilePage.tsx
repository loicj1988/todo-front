import React, { useEffect } from 'react';
import { useAuth0, User } from '@auth0/auth0-react';

export default function ProfilePage() {
  const { user, isAuthenticated, isLoading } = useAuth0<User>();

  useEffect(() => {}, [isAuthenticated]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return <div>Please log in ...</div>;
  }

  if (!user) {
    return <div>Something went wrong, please try again ...</div>;
  }

  return (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>
        Welcome {user[`${process.env.REACT_APP_AUTH0_NAMESPACE}username`]}
      </h2>
      <p>{user.email}</p>
    </div>
  );
}
