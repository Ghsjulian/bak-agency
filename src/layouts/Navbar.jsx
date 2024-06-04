import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

/*<----ICONS---->*/
import menu from "../assets/icons/menu.png";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [path, setPath] = useState("");
    useEffect(() => {
        setPath(location.pathname);
    }, [location]);
    const navRef = useRef(null);
    const popRef = useRef(null);
    const openNav = () => {
        navRef.current.classList.toggle("navbar");
    };
    const openPop = () => {
        popRef.current.classList.toggle("popup-menup");
    };

    return (
        <>
            <header>
                <h3 className="logo">Bak-Agency</h3>
                <nav ref={navRef} className="nav">
                    <ul>
                        <li>
                            <NavLink
                                onClick={openNav}
                                className={path == "/" ? "active" : ""}
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={openNav}
                                className={path == "/blogd" ? "active" : ""}
                                to="/blogs"
                            >
                                Blogs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={openNav}
                                className={path == "/about" ? "active" : ""}
                                to="/about"
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={openNav}
                                className={path == "/contact" ? "active" : ""}
                                to="/contact"
                            >
                                Contact Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={openPop}
                                className={path == "/service" ? "active" : ""}
                                to="#"
                            >
                                Our Services
                            </NavLink>
                            <div
                                ref={popRef}
                                className="popup-menu--off"
                               
                            >
                                <NavLink
                                    onClick={openNav}
                                    className={path == "/staff" ? "active" : ""}
                                    to="/web-development"
                                >
                                    Web Development
                                </NavLink>
                                <NavLink
                                    onClick={openNav}
                                    className={path == "/staff" ? "active" : ""}
                                    to="/web-development"
                                >
                                    Web Development
                                </NavLink>
                                <NavLink
                                    onClick={openNav}
                                    className={path == "/staff" ? "active" : ""}
                                    to="/web-development"
                                >
                                    Web Development
                                </NavLink>
                                <NavLink
                                    onClick={openNav}
                                    className={path == "/staff" ? "active" : ""}
                                    to="/web-development"
                                >
                                    Web Development
                                </NavLink>
                                <div
                                    className="ex--pop--off"
                                    
                                >
                                    <NavLink
                                        onClick={openNav}
                                        className={
                                            path == "/staff" ? "active" : ""
                                        }
                                        to="/staff"
                                    >
                                        Our Staffs
                                    </NavLink>
                                    <NavLink
                                        onClick={openNav}
                                        className={
                                            path == "/staff" ? "active" : ""
                                        }
                                        to="/staff"
                                    >
                                        Our Staffs
                                    </NavLink>
                                    <NavLink
                                        onClick={openNav}
                                        className={
                                            path == "/staff" ? "active" : ""
                                        }
                                        to="/staff"
                                    >
                                        Our Staffs
                                    </NavLink>
                                    <NavLink
                                        onClick={openNav}
                                        className={
                                            path == "/staff" ? "active" : ""
                                        }
                                        to="/staff"
                                    >
                                        Our Staffs
                                    </NavLink>
                                    <NavLink
                                        onClick={openNav}
                                        className={
                                            path == "/staff" ? "active" : ""
                                        }
                                        to="/staff"
                                    >
                                        Our Staffs
                                    </NavLink>
                                </div>
                            </div>
                        </li>
                        <li>
                            <NavLink
                                onClick={openNav}
                                className={path == "/staff" ? "active" : ""}
                                to="/staff"
                            >
                                Our Staffs
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <button
                    onClick={() => {
                        navigate("/contact");
                    }}
                    className="contact"
                >
                    Contact
                </button>
                <img onClick={openNav} className="menu" src={menu} />
            </header>
        </>
    );
};

export default Navbar;
