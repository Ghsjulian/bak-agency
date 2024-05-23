import React,{useEffect} from "react";
import service_1 from "../assets/images/service_1.png"


const Staffs = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }), [];
    });
    return (
        <div data-aos="zoom-in" id="page" className="section">
            <h2>Meet Our Staff</h2>
            <div className="two-row">
                <div data-aos="zoom-in" className="image">
                    <img src={service_1} />
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

export default Staffs;
