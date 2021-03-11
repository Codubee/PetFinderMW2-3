import React from "react";

import {Navbar, NavbarBrand} from "reactstrap";

function NavBar() {
    return (
        <>
            <Navbar color="light">
                <NavbarBrand href="/">PetFinder</NavbarBrand>
            </Navbar>
        </>
    )
}

export default NavBar;