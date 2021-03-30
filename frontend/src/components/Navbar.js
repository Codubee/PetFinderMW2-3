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

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../style/style.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Router>
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
                <NavLink>
                  <Link to="/" className="navlink">
                    Home
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/match/" className="navlink">
                    Match
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/">
            {/* Place the components for home here */}
            <Home />
          </Route>
          <Route exact path="/match/">
            {/* Place the components for match here */}
            <Match />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default NavBar;

//DUMMY FUNCTIONS TO TEST OUT ROUTING :REMOVE:
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Match() {
  return (
    <div>
      <h2>Match</h2>
    </div>
  );
}
