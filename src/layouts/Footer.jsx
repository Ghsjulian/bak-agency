import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import facebook from "../assets/icons/facebook.png";
import google from "../assets/icons/google.png";
import twitter from "../assets/icons/twitter.png";
import instagram from "../assets/icons/instagram.png";
import github from "../assets/icons/github.png";
import arrow_up from "../assets/icons/arrow_up.png";
import linkedin from "../assets/icons/linkedin.png";

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
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" }), [];
    };
    const [isLoadin, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const btnRef = useRef(null);
   // const baseURL = "http://localhost:8080/mail/subscribe.php";
    const baseURL = "http://bakdif.com/mail/subscribe.php";
    
    const sendMail = async e => {
        e.preventDefault();
        if (email !== "") {
            try {
                setLoading(true);
                axios
                    .post(baseURL, {
                        payloads: "__ghs_julian__",
                        client_email: email
                    })
                    .then(response => {
                        setEmail("");
                        setLoading(false);
                        btnRef.current.textContent = "Subscribed";
                        alert("Email Subscribed Successfully!");
                    });
            } catch (error) {
                console.log(error);
            }
        }
    };
    return (
        <footer>
            <div className="top-flex">
                <div className="email-area">
                    <input
                        onChange={e => {
                            setEmail(e.target.value);
                        }}
                        value={email}
                        type="email"
                        placeholder="Enter Your Email Address"
                    />
                    <button ref={btnRef} onClick={sendMail} class="subscribe">
                        {isLoadin ? "Wait..." : "Subscribe"}
                    </button>
                </div>
                <NavLink id="contact" to="/contact">
                    Get In Touch
                </NavLink>
            </div>
            {/* Footer Contact Information here */}
            <div className="mid-flex">
                <div className="flex-row">
                    <h3>About Company</h3>
                    <li>
                        <NavLink to="/about">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/our-team">Our Team</NavLink>
                    </li>
                    <li>
                        <NavLink to="/our-privacy">Privacy And Policy</NavLink>
                    </li>
                    <li>
                        <NavLink to="/terms-condition">
                            Terms And Connection
                        </NavLink>
                    </li>
                </div>
                <div className="flex-row">
                    <h3>Our Services</h3>
                    <li>
                        <NavLink to="/services">Our Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/service/responsive-design">
                            Web Development
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/service/google-ads">
                            Google PPC Ads
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/service/graphic-design">
                            Graphics Design
                        </NavLink>
                    </li>
                </div>
                <div className="flex-row">
                    <h3>Contact Us</h3>
                    <li>
                        <NavLink to="#">Bangladesh Mobile : +8809696132246</NavLink>
                    </li>
                    <li>
                        <NavLink to="#">Dubai Mobile : 071543543980</NavLink>
                    </li>
                    <li>
                        <NavLink to="#"> USA Mobile : 7169483740</NavLink>
                    </li>
                    <li>
                        <NavLink to="#">Email : info@bakdif.com</NavLink>
                    </li>
                </div>
            </div>
            {/* Footer Contact Information here */}
            <div className="social-flex">
                <div className="social">
                    <NavLink to="/">
                        <img src={google} />
                    </NavLink>
                    <NavLink
                        target="_blank"
                        to="https://www.facebook.com/bakdif"
                    >
                        <img src={facebook} />
                    </NavLink>
                    <NavLink
                        target="_blank"
                        to="https://www.linkedin.com/company/bakdif"
                    >
                        <img src={linkedin} />
                    </NavLink>
                    <NavLink to="/">
                        <img src={twitter} />
                    </NavLink>
                    <NavLink to="/">
                        <img src={github} />
                    </NavLink>
                </div>
                <strong>
                    © Copyright All Reserve <span>Bak Digital Firm</span>
                </strong>
            </div>
        </footer>
    );
};

export default Footer;
