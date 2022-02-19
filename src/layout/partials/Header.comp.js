import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

const Header = () => {
    // useNavigate is the new version of useHistory
    const navigate =  useNavigate();

    const logMeOut = () => {
        navigate('/');
    }

  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
        <Container fluid>
            <Navbar.Brand>
                    <LinkContainer to="/">
                        <Nav.Link><img src={logo} width="50px" alt="" /></Nav.Link>
                    </LinkContainer>
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="navWrapper">
                <Nav className="ms-auto">
                    <LinkContainer to="/dashboard">
                        <Nav.Link>Dashboard</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/tickets">
                        <Nav.Link>Tickets</Nav.Link>
                    </LinkContainer>
                    <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header