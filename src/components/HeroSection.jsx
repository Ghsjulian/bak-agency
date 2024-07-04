import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import rightArrow from "../assets/icons/rightArrow.png";
import "../assets/css/index.css";
import { ReactTyped } from "react-typed";
import MySlider from './Slider';

const HeroSection = () => {
    return (
        <main data-aos="zoom-in">
            <section data-aos="zoom-in" className="hero">
                <h1 className="typer">
                <ReactTyped
                        strings={[
                          "Full Stack SEO",
                          "PPC & Google Adds",
                          "Email Marketing",
                          "Digital Strategy",
                          "Graphics Design",
                         "Video Production",
                         "Copywrite Services"
                        ]}
                        cursorChar="|"
                        typeSpeed={90} // Adjust typing speed here (milliseconds)
                        backSpeed={80} // Adjust backspace speed (milliseconds)
                        loop // Set to loop through the strings continuously
                    />
                </h1>
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
                {/* <img id="hero-logo" src={hero__1} /> */}
                <MySlider />
            </section>
            <div id="what-we-can-do"></div>
        </main>
    );
};

export default HeroSection;
