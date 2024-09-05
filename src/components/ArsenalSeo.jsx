import React from "react";
import Marquee from "react-fast-marquee";
import untitled42 from "../assets/icons/untitled42.png";
import Untitled43 from "../assets/icons/Untitled43.png";
import Untitled44 from "../assets/icons/Untitled44.png";
import Untitled45 from "../assets/icons/Untitled45.png";
import Untitled46 from "../assets/icons/Untitled46.png";

// SwiperCore.use([Navigation, Pagination]);
const ArsenalSeo = () => {
    return (
        <div id="slide" data-aos="zoom-in" className="section">
            <h2>Our SEO Tools</h2>
            <Marquee direction={"right"}>
                <div className="slide">
                    <img src="/tools/Woorank.png" />
                </div>
                <div className="slide">
                    <img src="/tools/KWFinder.png" />
                </div>
                <div className="slide">
                    <img src="/tools/Rivalflow.png" />
                </div>
                <div className="slide">
                    <img src="/tools/Serpstat.png" />
                </div>
                <div className="slide">
                    <img src="/tools/Answer The Public.png" />
                </div>
                <div className="slide">
                    <img src="/tools/Backlink Repository.png" />
                </div>
                <div className="slide">
                    <img src="/tools/Buzzstream.png" />
                </div>
                <div className="slide">
                    <img src="/tools/Seobilty.png" />
                </div>
            </Marquee>
        </div>
    );
};

export default ArsenalSeo;
