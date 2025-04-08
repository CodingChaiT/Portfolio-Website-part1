import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <div id="wrapper">
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined}>
                <img src="/home.gif" alt="Home" width="200" height="175" />
            </NavLink> &nbsp;

            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : undefined}>
                <img src="/About.gif" alt="About" width="200" height="175" />
            </NavLink> &nbsp;

            <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : undefined}>
                <img src="/Projects.gif" alt="Projects" width="200" height="175" />
            </NavLink> &nbsp;

            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : undefined}>
                <img src="/contact.gif" alt="Contact" width="200" height="175" />
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBar;
