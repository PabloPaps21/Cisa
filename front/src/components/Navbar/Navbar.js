import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const navbar = {
  borderTop: '3px solid #0DB14B',
  backgroundColor: '#f8f9fa',
}
const navActive = {
  borderBottom: '2px solid #0DB14B'
}

function NavbarM() {
  return(
    <>
  <Navbar style={navbar} expand="lg" fixed='top'>
  <Navbar.Brand href="/">
    <img src="https://res.cloudinary.com/du9zaipqt/image/upload/v1606672733/cisa/logo_da5out.svg" alt="CIISA"/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/" >Inicio</Nav.Link>
      <Nav.Link href="/">Beneficios</Nav.Link>
      <Nav.Link href="/ver"> Administración </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </>
  )
}
export default NavbarM;