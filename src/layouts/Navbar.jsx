import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

/*<----ICONS---->*/
import menu from "../assets/icons/menu.png";

const Navbar = () => {
    const navRef = useRef(null);
    const openNav = () => {
        navRef.current.classList.toggle("navbar");
    };

    return (
        <header>
            <h3 className="logo">Bak-Agency</h3>
            <nav ref={navRef} className="nav">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact Us </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Our Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Our Staffs</NavLink>
                    </li>
                </ul>
            </nav>
            <button className="contact">Contact</button>
            <img onClick={openNav} className="menu" src={menu} />
        </header>
    );
};

export default Navbar;
