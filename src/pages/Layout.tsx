import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import SignupButton from '../components/SignupButton';

export default function Layout() {
  return (
    <div>
      <div>Todo list application</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todos">Todo list</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <LoginButton />
      <LogoutButton />
      <SignupButton />
      <hr />
      <Outlet />
    </div>
  );
}
