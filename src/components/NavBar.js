import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
<Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">CinemaHeroes</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link >
          <Link to="/home">Home</Link>
        </Nav.Link>
        <Nav.Link >
          <Link to="/new">New Hero</Link>
        </Nav.Link>
        <Nav.Link >
          <Link to="/delete">Delete Hero</Link>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )

}

export default NavBar;