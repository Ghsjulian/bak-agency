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

const HeroSection = () => {
    return (
        <main>
            <section className="hero">
                <h2 className="hero-text">Welcome to Our Bak-Agency</h2>
                <p>
                    Explore our latest products and offers. We provide best
                    products and services in all over the country, to get touch
                    us please order or contact with us. Our best services and
                    products , that we sell is very good.
                </p>
                <div className="btn-area">
                    <button id="shop">
                        See More
                        <img className="menu" src={rightArrow} />
                    </button>
                </div>
            </section>
            <section className="hero-img">
                <img id="hero-logo" src={hero_5} />
            </section>
        </main>
    );
};

export default HeroSection;
