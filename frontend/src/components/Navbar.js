import React, { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
} from "reactstrap";

import "../style/style.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar className="navbar" dark expand="md">
        <NavbarBrand className="navbrand">
          <h1>PetFinder</h1>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav" navbar>
            <NavItem>
              <NavLink href="/" className="navlink">
                <h2>Home</h2>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/match/" className="navlink">
                <h2>Match</h2>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
