import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Auth0Provider
    domain="dev-xtuoussz.jp.auth0.com"
    clientId="1whodDBZhNMORCwHZjEnCPscPLPFezpZ"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
