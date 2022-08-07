import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../pages/Loading';

export interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    loginWithRedirect();
    return <Loading />;
  }

  return children;
};

export default ProtectedRoute;
