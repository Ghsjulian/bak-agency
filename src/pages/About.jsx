import React, { useEffect } from "react";
import client_1 from "../assets/images/client_1.png";
import WhyUs from "../components/WhyUs";
import OurServices from "../components/OurServices";

const About = () => {
    document.title = "About us - See and know more about our services";
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }), [];
    });
    return (
        <>
            <div id="page" className="section">
                <img
                    className="heading-img"
                    src="/images/About us Header.png"
                    alt="Heading Image Here"
                />
                <div className="two-row">
                    <div
                        style={{ marginTop: "3.7rem" }}
                        data-aos="zoom-in"
                        className="image"
                    >
                        <img src="/images/About us Image.png" />
                    </div>
                    <div data-aos="zoom-in" id="content" className="form">
                        <h2 style={{ marginTop: "3.7rem" }}>
                            About Bak Digital Firm
                        </h2>
                        <p style={{ marginTop: ".7rem" }} className="text">
                            BAK Digital Firm and Online Services is a premier
                            digital solutions provider, specializing in a wide
                            array of digital goods and services. Our expertise
                            spans across Web Design & Development, Graphic
                            Design, Digital Marketing, SEO Optimization, Social
                            Media Management, E-commerce Website Development,
                            Dropshipping Creation & Management, Amazon &
                            E-commerce Store Management.
                        </p>
                    </div>
                </div>
            </div>
            <OurServices />
            <WhyUs />
        </>
    );
};

export default About;
