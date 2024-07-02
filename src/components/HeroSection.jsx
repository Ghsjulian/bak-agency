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
import { ReactTyped } from "react-typed";
import MySlider from './Slider';

const HeroSection = () => {
    // console.log(data)
    return (
        <main data-aos="zoom-in">
            <audio style={{display:"none"}} id="audio" loop autoplay>
  <source src="your_audio_file.mp3" type="audio/mp3"/>
  <source src="your_audio_file.wav" type="audio/wav"/>
  Your browser does not support the audio element.
</audio>
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
