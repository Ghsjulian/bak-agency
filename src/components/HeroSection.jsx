import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
/* ICONS */
import rightArrow from "../assets/icons/rightArrow.png";
import hero_1 from "../assets/images/hero_1.png";
import hero_2 from "../assets/images/hero_2.jpg";
import hero_3 from "../assets/images/hero_3.jpg";
import hero_4 from "../assets/images/hero_4.jpg";
import hero_5 from "../assets/images/hero_5.jpg";
import hero_6 from "../assets/images/hero_6.jpg";
import agent_2 from "../assets/images/agent_3.png";
// import { useSite } from "../context/useAuth";

const HeroSection = ({ data }) => {
    return (
        <main data-aos="zoom-in">
            <section data-aos="zoom-in" className="hero">
                <h2 className="hero-text">Welcome To Our Bak Agency</h2>
                <p>Hello dear clientRather Than Losing Faith In People 
It Is Pleasure To Be Lost In The Heart Of Nature </p>
                <div className="btn-area">
                    <a href="#what-we-can-do" id="shop">
                        See More
                        <img className="menu" src={rightArrow} />
                    </a>
                </div>
            </section>
            <section siteData-aos="zoom-in" className="hero-img">
                <img id="hero-logo" src={agent_2} />
            </section>
            <div id="what-we-can-do"></div>
        </main>
    );
};

export default HeroSection;
