import React from "react";

import {Navbar, NavbarBrand,Nav, NavItem, NavLink} from "reactstrap";

import '../style/style.css'

function NavBar() {
    return (
        <>
            <Navbar className="navbar">
                <Nav className="nav">
                <NavbarBrand className="navbrand"><h1>PetFinder</h1></NavbarBrand>
                <NavItem>
                    <NavLink href="/" className="navlink"><h2>Home</h2></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/match/" className="navlink"><h2>Match</h2></NavLink>
                </NavItem> 
                </Nav>               
            </Navbar>
        </>
    )
}

export default NavBar;