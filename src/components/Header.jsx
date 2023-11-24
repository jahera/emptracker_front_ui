import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {

  return (
    <>
      <header>
        <Navbar bg="dark" variant='dark' expand="lg">
          <Container>
            <Link to={'/home'}>Home</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navbar-nav ml-auto">
                <Link to={'/signup'}><i className="fas fa-user-plus"></i> Signup</Link>&nbsp;&nbsp;
                <Link to={'/signin'}><i className="fas fa-user"></i> Signin</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header
