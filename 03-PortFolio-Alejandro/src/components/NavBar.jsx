import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand><img
                    alt=""
                    src="../src/../public/img.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                /></Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <div className="mx-auto"> {/* Contenedor para centrar los elementos */}
                    <Nav className="mr-auto">
                        <LinkContainer to="/service">
                            <Nav.Link>Service</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;