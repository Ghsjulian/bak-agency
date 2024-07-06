import React from "react";
import client_1 from "../assets/images/client_1.png";

const OurTeam = () => {
    document.title = "Our Team - See Our Team Members";
    return (
        <div data-aos="zoom-in" id="page" className="section">
            <h2> Our Team Members </h2>
            <p style={{ marginTop: ".7rem" }} className="text">
                        Meet our team expertises. We have a group of team and we can handle any task byu sharing our experience. Here is our  
                        team members name and their skills and experienc.
                    </p>
            <div className="grid-row">
                <div className="card">
                    <img src={client_1} alt="Team Ghs Julian" />
                    <h3> Ghs Julian</h3>
                    <h4> Web Developer And Designer </h4>
                    <p>
                        He is an expert web developer and desginer , he create
                        or develop any website easily.
                    </p>
                </div>
                <div className="card">
                    <img src={client_1} alt="Team Ghs Julian" />
                    <h3> Ghs Julian</h3>
                    <h4> Web Developer And Designer </h4>
                    <p>
                        He is an expert web developer and desginer , he create
                        or develop any website easily.
                    </p>
                </div>
                <div className="card">
                    <img src={client_1} alt="Team Ghs Julian" />
                    <h3> Ghs Julian</h3>
                    <h4> Web Developer And Designer </h4>
                    <p>
                        He is an expert web developer and desginer , he create
                        or develop any website easily.
                    </p>
                </div>
                <div className="card">
                    <img src={client_1} alt="Team Ghs Julian" />
                    <h3> Ghs Julian</h3>
                    <h4> Web Developer And Designer </h4>
                    <p>
                        He is an expert web developer and desginer , he create
                        or develop any website easily.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
