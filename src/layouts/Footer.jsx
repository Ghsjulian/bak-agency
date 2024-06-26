import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import facebook from "../assets/icons/facebook.png";
import google from "../assets/icons/google.png";
import twitter from "../assets/icons/twitter.png";
import instagram from "../assets/icons/instagram.png";
import github from "../assets/icons/github.png";
import arrow_up from "../assets/icons/arrow_up.png";

const Footer = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" }), [];
    }
    return (
        <footer className="footer">
            <div onClick={goToTop} className="three-row-footer">
                <button className="top-btn">
                    <img src={arrow_up} />
                </button>
            </div>
            <div className="social">
                <NavLink to="/">
                    <img src={google} />
                </NavLink>
                <NavLink to="/">
                    <img src={facebook} />
                </NavLink>
                <NavLink to="/">
                    <img src={instagram} />
                </NavLink>
                <NavLink to="/">
                    <img src={twitter} />
                </NavLink>
                <NavLink to="/">
                    <img src={github} />
                </NavLink>
            </div>
            <strong>
                © Copyright All Reserve <span>2023-2024</span>
            </strong>
            {/*
            <p>
                Developed By -
                <NavLink to="https://ghsresume.netlify.app" target="_blank">
                    Ghs Julian
                </NavLink>
            </p>
            */}
        </footer>
    );
};

export default Footer;
