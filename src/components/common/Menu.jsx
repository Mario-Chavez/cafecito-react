import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <Navbar bg="danger" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to={"/"}>
                    Cafecito
                </Navbar.Brand>
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
                        <NavLink end className={"nav-item nav-link"} to={"/"}>
                            Inicio
                        </NavLink>
                        <NavLink end className={"nav-item nav-link"} to={"/registro"}>
                            Registro
                        </NavLink>
                        <NavLink
                            end
                            className={"nav-item nav-link"}
                            to={"/administrador"}
                        >
                            Administrador
                        </NavLink>
                        <NavLink end className={"nav-item nav-link"} to={"/login"}>
                            Login
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
/* */
export default Menu;
