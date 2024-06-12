import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../assets/css/Navbar.css";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [path, setPath] = useState("");
    useEffect(() => {
        setPath(location.pathname);
    }, [location]);
    const [isChecked, setIsChecked] = useState(false);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };
    const closeNav = () => {
        setIsChecked(false);
    };
    return (
        <header>
            <div className="container">
                <input
                    checked={isChecked}
                    onChange={handleOnChange}
                    type="checkbox"
                    name="check"
                    id="check"
                />
                <div className="logo-container">
                    <h3 className="logo">
                        Bak-<span>Agency</span>
                    </h3>
                </div>

                <div className="nav-btn">
                    <div className="nav-links">
                        <ul>
                            <li className="nav-link">
                                <NavLink
                                    onClick={closeNav}
                                    className={path == "/" ? "active" : ""}
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink
                                    onClick={closeNav}
                                    className={path == "/about" ? "active" : ""}
                                    to="/about"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink
                                    onClick={closeNav}
                                    className={path == "/blogd" ? "active" : ""}
                                    to="/blogs"
                                >
                                    Blogs
                                </NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink to="#">
                                    Services
                                    <i className="fas fa-caret-down"></i>
                                </NavLink>
                                <div className="dropdown">
                                    <ul>
                                        <li className="dropdown-link">
                                            <NavLink to="#">
                                                Core Services
                                                <i className="fas fa-caret-down"></i>
                                            </NavLink>
                                            <div className="dropdown second">
                                                <ul>
                                                    <li className="dropdown-link">
                                                        <NavLink to="service/Fullstack SEO & Local">
                                                            Fullstack SEO &
                                                            Local
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                            PPC & Google Adds
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                            Email Mareting
                                                            Campagine
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                            Digital Strategy
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                            Market Research
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                            Digital
                                                            Transformation
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                            Brand Strateg
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                            Customer Insights
                                                        </NavLink>
                                                    </li>
                                                    <div className="arrow"></div>
                                                </ul>
                                            </div>
                                        </li>
                                        {/* More Services */}
                                        <li className="dropdown-link">
                                            <NavLink to="#">
                                                Creative Services
                                                <i className="fas fa-caret-down"></i>
                                            </NavLink>
                                            <div className="dropdown second">
                                                <ul>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                            Graphics Desgin
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                            Video Production
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                            Copywrite Services
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                            Logo Desgin
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                            Branding
                                                        </NavLink>
                                                    </li>
                                                    <div className="arrow"></div>
                                                </ul>
                                            </div>
                                        </li>

                                        {/* More Services */}
                                        <li className="dropdown-link">
                                            <NavLink to="#">
                                                Content Creation
                                                <i className="fas fa-caret-down"></i>
                                            </NavLink>
                                            <div className="dropdown second">
                                                <ul>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                            Blog Writing
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                            Copy Writing
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                            Product Descriptions
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                            Content Strategy
                                                        </NavLink>
                                                    </li>
                                                    <div className="arrow"></div>
                                                </ul>
                                            </div>
                                        </li>

                                        {/* More Services */}
                                        <li className="dropdown-link">
                                            <NavLink to="#">
                                                Web Development
                                                <i className="fas fa-caret-down"></i>
                                            </NavLink>
                                            <div className="dropdown second">
                                                <ul>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                            Responsive Desgin
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                            E-Commerce Solutions
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                         App
                                                            Development
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                            CMS Integration
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                            Custom Web Solutions
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                            ADA Compliance
                                                        </NavLink>
                                                    </li>
                                                    <div className="arrow"></div>
                                                </ul>
                                            </div>
                                        </li>
                                        <div className="arrow"></div>
                                    </ul>
                                </div>
                            </li>

                            {/*
                            <li className="nav-link">
                                <NavLink to="#">
                                    Services
                                    <i className="fas fa-caret-down"></i>
                                </NavLink>
                                <div className="dropdown">
                                    <ul>
                                        <li className="dropdown-link">
                                            <NavLink to="#">Link 1</NavLink>
                                        </li>
                                        <li className="dropdown-link">
                                            <NavLink to="#">Link 2</NavLink>
                                        </li>
                                        <li className="dropdown-link">
                                            <NavLink to="#">
                                                Link 3
                                                <i className="fas fa-caret-down"></i>
                                            </NavLink>
                                            <div className="dropdown second">
                                                <ul>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                            Link 1
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                            Link 2
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                            Link 3
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink to="#">
                                                            More
                                                            <i className="fas fa-caret-down"></i>
                                                        </NavLink>
                                                        <div className="dropdown second">
                                                            <ul>
                                                                <li className="dropdown-link">
                                                                    <NavLink to="#">
                                                                        Link 1
                                                                    </NavLink>
                                                                </li>
                                                                <li className="dropdown-link">
                                                                    <NavLink to="#">
                                                                        Link 2
                                                                    </NavLink>
                                                                </li>
                                                                <li className="dropdown-link">
                                                                    <NavLink to="#">
                                                                        Link 3
                                                                    </NavLink>
                                                                </li>
                                                                <div className="arrow"></div>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <div className="arrow"></div>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="dropdown-link">
                                            <NavLink to="#">Link 4</NavLink>
                                        </li>
                                        <div className="arrow"></div>
                                    </ul>
                                </div>
                            </li>
                            */}
                        </ul>
                    </div>
                    <div className="log-sign">
                        <NavLink
                            onClick={closeNav}
                            to="/contact"
                            className="btn transparent"
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>

                <div className="hamburger-menu-container">
                    <div className="hamburger-menu">
                        <div></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
