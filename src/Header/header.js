import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class HeaderNav extends Component {
    render() {
        return (
                <Navbar bg="primary" expand="lg">
                <Navbar.Brand href="/PTC"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/PTC">PTC</Nav.Link>
                    <Nav.Link href="/news">RUS</Nav.Link>
                    <Nav.Link href="/news">Rgggg</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        )
    }
}
export default HeaderNav