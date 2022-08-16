import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import ProfilePage from './pages/ProfilePage';
import TodoListPage from './pages/TodoListPage';
import TodoRoutes from './TodoRoutes';

const App = () => {
  const { isLoading } = useAuth0();

  const domain: string = process.env.REACT_APP_AUTH0_DOMAIN || '';
  const clientId: string = process.env.REACT_APP_AUTH0_CLIENT_ID || '';
  const audience: string = process.env.REACT_APP_AUTH0_AUDIENCE || '';
  const scope: string = process.env.REACT_APP_AUTH0_SCOPE || '';
  const auth0Params = {
    domain,
    clientId,
    audience,
    scope,
    redirectUri: window.location.origin
  };

  return (
    <BrowserRouter>
      <Auth0Provider {...auth0Params}>
        <TodoRoutes></TodoRoutes>
      </Auth0Provider>
    </BrowserRouter>
  );
};

export default App;
