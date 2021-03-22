import React from "react";

import {Navbar, NavbarBrand,Nav, NavItem, NavLink} from "reactstrap";

import './style.css'

function NavBar() {
    return (
        <>
            <Navbar className="navbar">
                <Nav>
                <NavbarBrand className="navbrand">PetFinder</NavbarBrand>
                <NavItem>
                    <NavLink href="/" className="navlink">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/match/" className="navlink">Match</NavLink>
                </NavItem> 
                </Nav>               
            </Navbar>
        </>
    )
}

export default NavBar;