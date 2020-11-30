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
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About Me</Nav.Link>
                            <NavDropdown title="Projects" id="basic-nav-dropdown">
                                <NavDropdown.Item href="https://sameermithani.github.io/To-do List/" target='_blank'>To-Do List</NavDropdown.Item>
                                <NavDropdown.Item href="https://sameermithani.github.io/CV-Builder/" target='_blank'>CV-Builder</NavDropdown.Item>
                                <NavDropdown.Item href="https://sameermithani.github.io/Google%20Homepage/" target='_blank'>Google Homepage Clone</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href='/more'>More...</NavDropdown.Item>                                
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;