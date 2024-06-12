import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
/* ICONS */
import rightArrow from "../assets/icons/rightArrow.png";
import hero_1 from "../assets/images/hero_1.png";
import hero_2 from "../assets/images/hero_2.jpg";
import hero_3 from "../assets/images/hero_3.jpg";
import hero_4 from "../assets/images/hero_4.jpg";
import hero_5 from "../assets/images/hero_5.jpg";
import hero__1 from "../assets/images/hero__4.png";
import agent_2 from "../assets/images/agent_3.png";
import "../assets/css/index.css";
// import { useSite } from "../context/useAuth";

const HeroSection = () => {
    // console.log(data)
    return (
        <main data-aos="zoom-in">
            <section data-aos="zoom-in" className="hero">
                <h2 className="hero-text">
                Elevate Your Digital Presence with Our Expertise
                </h2>
                <p>
                Take your online presence to new heights with our expert digital services. From website design to SEO, social media, and content marketing, we'll help you build a strong online foundation that drives results. Learn more about our digital solutions and let's elevate your brand together !
                    </p>
                <div className="btn-area">
                    <a href="#what-we-can-do" id="shop">
                        See More
                        <img className="menu" src={rightArrow} />
                    </a>
                </div>
            </section>
            <section data-aos="zoom-in" className="hero-img">
                <img id="hero-logo" src={hero__1} />
            </section>
            <div id="what-we-can-do"></div>
        </main>
    );
};

export default HeroSection;
