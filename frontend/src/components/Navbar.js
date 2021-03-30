import React, { useState } from "react";
import { FaPaw } from "react-icons/fa";

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
      <Navbar className="navbar" expand="md">
        <NavbarBrand className="navbrand">
          <h1>PetFinder</h1>
        </NavbarBrand>
        <NavbarToggler onClick={toggle}>
          <FaPaw class="toggler-icon" />
        </NavbarToggler>

        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav" navbar>
            <NavItem>
              <NavLink href="/" className="navlink">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/match/" className="navlink">
                Match
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
