import React, { useEffect } from "react";
import client_1 from "../assets/images/client_1.png";

const About = () => {
    document.title = "About us - See and know more about our services"
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }), [];
    });
    return (
        <div id="page" className="section">
            <div className="two-row">
                <div data-aos="zoom-in" className="image">
                    <img src={client_1} />
                </div>
                <div data-aos="zoom-in" id="content" className="form">
                    <h2 style={{ marginTop: "1rem" }}>About Bak Farm Digital Agency</h2>
                    <p style={{ marginTop: ".7rem" }} className="text">
                        Bak Farm Digital Agency and Online Services is a cutting-edge digital solutions provider that helps businesses thrive in the online landscape. Our team of experts specializes in crafting innovative digital strategies, designing stunning websites, and delivering top-notch online services that drive real results.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
