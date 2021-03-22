import React from "react";

import {Navbar, NavbarBrand,Nav, NavItem, NavLink} from "reactstrap";

function NavBar() {
    return (
        <>
            <Navbar color="light">
                <Nav>
                <NavbarBrand href="/">PetFinder</NavbarBrand>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">Match</NavLink>
                </NavItem> 
                </Nav>
                
            </Navbar>
        </>
    )
}

export default NavBar;