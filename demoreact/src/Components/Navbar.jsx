import React from 'react';
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor: "red" }}>
            <div class="container-fluid">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/About" >About</NavLink>
                <NavLink to="/Contact" >Contact</NavLink>
            </div>
        </nav>
    )
}

export default Navbar