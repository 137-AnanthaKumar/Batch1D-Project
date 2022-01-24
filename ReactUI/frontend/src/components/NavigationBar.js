import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './NavigationBar.css';

const NavigationBar = (props) => {
  return (
    <Navbar className="nav" >
      <Navbar.Brand href="/">KNST BANK</Navbar.Brand>

      <Nav className="mr-auto">
        <Link to="/" className="homehover">HOME</Link>
      </Nav>
      <Nav className="navbar-right">
        <Link to="/adminlogin" className="nav-link">
          Admin Login
        </Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
