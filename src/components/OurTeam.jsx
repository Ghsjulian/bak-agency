import React from "react";
import client_1 from "../assets/images/client_1.png";
import client1 from "../assets/images/client1.jpg";
import client2 from "../assets/images/client2.jpg";
import client4 from "../assets/images/client4.jpg";

const OurTeam = () => {
    document.title = "Our Team - See Our Team Members";
    return (
        <div data-aos="zoom-in" id="page" className="section">
            <h2> Our Team Members </h2>
            <p style={{ marginTop: ".7rem" }} className="text">
                Meet our team expertises. We have a group of team and we can
                handle any task byu sharing our experience. Here is our team
                members name and their skills and experienc.
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
                    <img src={client2} alt="Team Ghs Julian" />
                    <h3>Devid Smith</h3>
                    <h4> Graphics Designer </h4>
                    <p>
                        He is an expert graphics ,logo and desginer , he create
                        or develop any design easily.
                    </p>
                </div>
                <div className="card">
                    <img src={client4} alt="Team Ghs Julian" />
                    <h3> Alina Lopez</h3>
                    <h4> SEO Specialist</h4>
                    <p>
                        She is an expert SEO Specialist, She create or develop
                        any website easily.
                    </p>
                </div>
                <div className="card">
                    <img src={client1} alt="Team Ghs Julian" />
                    <h3>Jessica Kaur</h3>
                    <h4> Professional Content Creator</h4>
                    <p>
                        She is an expert content creator and desginer , she create
                        or develop any website easily.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
