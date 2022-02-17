import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../../assets/img/logo.png';

const Header = () => {
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
        <Container fluid>
            <Navbar.Brand href="#">
                <img src={logo} width="50px" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#">Dashboard</Nav.Link>
                    <Nav.Link href="#">Ticket</Nav.Link>
                    <Nav.Link href="#">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header