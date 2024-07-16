import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/icons/logo.png";
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
    const goToHome = () => {
        navigate("/");
        closeNav();
        window.scrollTo({ top: 0, behavior: "smooth" });
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
                <div onClick={goToHome} className="logo-container">
                    <img src={logo} />
                    <h3 className="logo">
                        Bak-<span>Digital</span>
                        <span className="third--logo">Firm</span>
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
                                                        <NavLink
                                                            onClick={closeNav}
                                                            to="/service/fullstack-seo"
                                                        >
                                                            Fullstack SEO &
                                                            Local
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink
                                                            onClick={closeNav}
                                                            to="/service/google-ads"
                                                        >
                                                            PPC & Google Ads
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink
                                                            onClick={closeNav}
                                                            to="#"
                                                        >
                                                            Email Mareting
                                                            Campagine
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink
                                                            onClick={closeNav}
                                                            to="#"
                                                        >
                                                            Digital Strategy
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink
                                                            onClick={closeNav}
                                                            to="#"
                                                        >
                                                            Market Research
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink
                                                            onClick={closeNav}
                                                            to="#"
                                                        >
                                                            Digital
                                                            Transformation
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink
                                                            onClick={closeNav}
                                                            to="#"
                                                        >
                                                            Brand Strateg
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink
                                                            onClick={closeNav}
                                                            to="#"
                                                        >
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
                                                        <NavLink
                                                            onClick={closeNav}
                                                            to="#"
                                                        >
                                                            Graphics Desgin
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink
                                                            onClick={closeNav}
                                                            to="#"
                                                        >
                                                            Video Production
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink
                                                            onClick={closeNav}
                                                            to="#"
                                                        >
                                                            Copywrite Services
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink
                                                            onClick={closeNav}
                                                            to="#"
                                                        >
                                                            Logo Desgin
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink
                                                            onClick={closeNav}
                                                            to="#"
                                                        >
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
                                                        <NavLink
                                                            onClick={closeNav}
                                                            to="#"
                                                        >
                                                            Blog Writing
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink
                                                            onClick={closeNav}
                                                            to="#"
                                                        >
                                                            Sound Canvas
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink
                                                            onClick={closeNav}
                                                            to="#"
                                                        >
                                                            Product Descriptions
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink
                                                            onClick={closeNav}
                                                            to="#"
                                                        >
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
                                                        <NavLink
                                                            onClick={closeNav}
                                                            to="#"
                                                        >
                                                            Responsive Desgin
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink
                                                            onClick={closeNav}
                                                            to="#"
                                                        >
                                                            E-Commerce Solutions
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink
                                                            onClick={closeNav}
                                                            to="#"
                                                        >
                                                            App Development
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink
                                                            onClick={closeNav}
                                                            to="#"
                                                        >
                                                            CMS Integration
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink
                                                            onClick={closeNav}
                                                            to="#"
                                                        >
                                                            Custom Web Solutions
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <NavLink
                                                            onClick={closeNav}
                                                            to="#"
                                                        >
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
                            <li className="nav-link">
                                <NavLink
                                    onClick={closeNav}
                                    className={path == "/blogd" ? "active" : ""}
                                    to="/blogs"
                                >
                                    Blogs
                                </NavLink>
                            </li>
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
                        <NavLink
                            onClick={closeNav}
                            to="/our-team"
                            id="team"
                            className="btn transparent"
                        >
                            Our Team
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
