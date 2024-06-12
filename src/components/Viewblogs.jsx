import React from "react";
import team_2 from "../assets/images/team_2.png";
const Viewblogs = () => {
    return (
        <div data-aos="zoom-in" className="section view--blog">
            <div className="two-row">
            <div data-aos="zoom-in" className="image">
            <img src={team_2} />
            </div>
            <div style={{marginTop:"8rem"}} data-aos="zoom-in" id="content" className="form">
            <h2> Our latest post of the services which we provided. </h2>
            <p className="text">
                Explore our main service and offer we provide the best service
                all over the world , if you want to get our service please
                contact us right now we'll response you as soon as possible.
            </p>
            </div>
            </div>
        </div>
    );
};

export default Viewblogs;
