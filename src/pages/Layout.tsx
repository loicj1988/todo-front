import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Container, Nav, Navbar, NavItem, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import SignupButton from '../components/SignupButton';

export default function Layout() {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            My todos
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              {isAuthenticated && (
                <>
                  <Nav.Link as={Link} to="/todos">
                    Todos
                  </Nav.Link>
                  <Nav.Link as={Link} to="/profile">
                    Profile
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
          <Navbar.Text>
            <Stack gap={3} direction="horizontal">
              {isAuthenticated && <LogoutButton />}
              {!isAuthenticated && (
                <>
                  <LoginButton />
                  <SignupButton />
                </>
              )}
            </Stack>
          </Navbar.Text>
        </Container>
      </Navbar>

      <hr />
      <Outlet />
    </>
  );
}
