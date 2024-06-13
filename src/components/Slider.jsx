import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import digital_marketing_2 from "../assets/images/digital_marketing_2.png"
import digital_marketing from "../assets/images/digital_marketing.png"
import web_desgine from "../assets/images/web_desgine.png"
import web_design from "../assets/images/web_design.png"
import web_development from "../assets/images/web_development.png"


const MySlider = () => {
    const images = [
        digital_marketing_2, digital_marketing, web_desgine, web_design, web_development
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