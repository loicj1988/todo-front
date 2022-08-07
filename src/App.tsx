import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import ProfilePage from './pages/ProfilePage';
import TodoListPage from './pages/TodoListPage';

const App = () => {
  const { isLoading } = useAuth0();
  const domain: string = process.env.REACT_APP_AUTH0_DOMAIN || '';
  const clientId: string = process.env.REACT_APP_AUTH0_CLIENT_ID || '';

  return (
    <BrowserRouter>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="todos" element={<TodoListPage />} />
            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </Auth0Provider>
    </BrowserRouter>
  );
};

export default App;
