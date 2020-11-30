import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div id='navbar-main'>
                <Navbar bg="primary" variant='dark' expand="lg">
                    <Navbar.Brand href="#home">Welcome!</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About Me</Nav.Link>
                            <NavDropdown title="Projects" id="basic-nav-dropdown">
                                <NavDropdown.Item href="https://sameermithani.github.io/To-do List/">To-Do List</NavDropdown.Item>
                                <NavDropdown.Item href="https://sameermithani.github.io/CV-Builder/">CV-Builder</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Google Homepage Clone</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">More...</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;