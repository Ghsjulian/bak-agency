import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import full_stack_web from "../assets/images/Full stack web design.png"
import web_design from "../assets/images/Web Design.png"
import Web_development from "../assets/images/Web development.png"
import seo from "../assets/images/SEO image.png"
import social_media from "../assets/images/Social media marketting.png"
import multiple from "../assets/images/Multiple services.png"
import graphics_design from "../assets/images/Graphics design.png"




const MySlider = () => {
    const images = [
        multiple,full_stack_web,web_design,Web_development,seo,social_media,graphics_design
    ];
    const [value, setValue] = useState(0);
    const [timerId, setTimerId] = useState(null);

    useEffect(() => {
        const interval = 2500; // 2.5 seconds
        const timerId = setInterval(() => {
            setValue((prevValue) => (prevValue + 12) % 60); // update the slider value
        }, interval);
        setTimerId(timerId);
        return () => clearInterval(timerId); // clear the timer when the component unmounts
    }, []);

    return (
        <div>
            <Slider
                value={value}
                min={0}
                max={60}
                step={12}
            />
            <img id="hero-logo" src={images[Math.floor(value / 12)]} alt={`Image ${Math.floor(value / 12) + 1}`} />
            {/* <h2>Hello{value}</h2> */}
        </div>
    );
};

export default MySlider;