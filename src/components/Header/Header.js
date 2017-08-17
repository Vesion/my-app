import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Navbar inverse collapseOnSelect fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Hulu</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Link Left</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Link Right</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
