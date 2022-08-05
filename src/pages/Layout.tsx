import React from 'react';
import { Link, Outlet } from 'react-router-dom';

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
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}
