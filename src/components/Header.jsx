import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import { signOut } from '../services/auth';
import { useHistory } from "react-router-dom";


function Header() {
  const navigate = useHistory();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const handleLogout = async () => {
    try {
      await signOut();
      // Clear any user-related data from the client (e.g., localStorage)
      // Redirect to the login page or any other desired location
      localStorage.setItem('isLoggedIn', 'false');
      navigate.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav>
              {isLoggedIn == 'false' ? (
              <>
                <Link to={'/signup'}><i className="fas fa-user-plus"></i> Signup {isLoggedIn}</Link>
                <Link to={'/signin'}><i className="fas fa-user"> </i>Login </Link>
              </>
              ) : (
                <Link to='#' onClick={handleLogout}>Logout {isLoggedIn} </Link>
              )}
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header

// <Link to={'/roomlist'}><i className="fas fa-user"></i> Room List</Link>