import React from "react";
import { Navbar, Container} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Spacestagram</Navbar.Brand>
        </LinkContainer>
        <LinkContainer to="/">
          <Navbar.Brand>Explore </Navbar.Brand>
        </LinkContainer>
        <LinkContainer to="/liked">
          <Navbar.Brand>Liked</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    
      <Navbar.Text>
        API Credit: NASA API - APOD
      </Navbar.Text>
    </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
};

export default NavBar;
