import React from "react";

import {Navbar, NavbarBrand,Nav, NavItem, NavLink} from "reactstrap";

function NavBar() {
    return (
        <>
            <Navbar color="dark">
                <Nav>
                <NavbarBrand href="/" style={{color: "white"}}>PetFinder</NavbarBrand>
                <NavItem>
                    <NavLink href="/home/" style={{color: "white"}}>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/match/" style={{color: "white"}}>Match</NavLink>
                </NavItem> 
                </Nav>               
            </Navbar>
        </>
    )
}

export default NavBar;