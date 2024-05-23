import React,{useEffect} from "react";
import client_1 from "../assets/images/client_1.png";

const About = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }), [];
    });
    return (
        <div id="page" className="section">
            <h2>About Us </h2>
            <div className="two-row">
                <div data-aos="zoom-in" className="image">
                    <img src={client_1} />
                </div>
                <div data-aos="zoom-in" id="content" className="form">
                    <p className="text">
                        Full free to contact with us , our team will response
                        you as soon as possible. You can directly contact us and
                        get touch with us.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
