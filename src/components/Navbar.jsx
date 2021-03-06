import React from 'react';
import {
  Nav, Navbar, Container,
} from 'react-bootstrap';

/**
 * Header to the page, contains all our navigation links
 */
const NavBar = () => (
  <Container>
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Navbar.Brand href="/">
          <h3>GameTime</h3>
        </Navbar.Brand>
        <Nav.Link href="/highscore">
          <h3>HighScore</h3>
        </Nav.Link>
        <Nav.Link href="/game">
          <h3>Game</h3>
        </Nav.Link>
        <Nav.Link href="/forum">
          <h3>Forum</h3>
        </Nav.Link>
        <Nav.Link href="/profile">
          <h3>Profile</h3>
        </Nav.Link>
        <Nav.Link href="/login" style={{ display: 'inline-block', marginRight: '120px' }}>
          <h3>Login</h3>
        </Nav.Link>
      </Nav>
    </Navbar>
  </Container>
);

export default NavBar;
