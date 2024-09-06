import React, { useEffect } from "react";
import OurServices from "../components/OurServices";

const Services = () => {
    document.title =
        "Our Services - See our all services and know more about aur IT Farm";
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }), [];
    });
    return (
        <div data-aos="zoom-in" id="page" className="section">
            <OurServices />
        </div>
    );
};

export default Services;
