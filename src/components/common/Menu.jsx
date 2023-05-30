import React from "react";
import { Container, NavDropdown, Navbar, Nav, Form, Button } from "react-bootstrap";

const Menu = () => {
    return (
        <Navbar bg="danger" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Cafecito</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    ></Nav>
                    <Nav
                        className="me-0 my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#registro">Registro</Nav.Link>
                        <Nav.Link href="#administrador">Administrador</Nav.Link>
                        <Nav.Link href="#login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
/* */
export default Menu;
