import React from "react";
import { NavLink } from "react-router-dom";
import team_2 from "../assets/images/team_2.png";
import arrow from "../assets/icons/rightArrow.png"

const Blogs = () => {
    document.title = "Our Blogs & Articles - Read Our most useful blogs and know more about our services"
    return (
        <div data-aos="zoom-in" id="page" className="section">
            <h2> Explore Our Latest Blogs </h2>
            <p className="text">
            Stay ahead of the curve with the latest insights and trends in digital marketing and online services. Our blog is your go-to resource for expert advice, industry news, and thought leadership articles. From the benefits of outsourcing to a digital agency to the latest digital marketing techniques, our blog covers it all.
            </p>
            <div className="row">
                <div data-aos="zoom-in" className="col blogs">
                    <img src={team_2} />
                    <h4>Coding & IT Technology</h4>
                    <p style={{wordSpacing:"2px"}} className="p-text">
                        Explore our main service and offer we provide the best
                        service all over the world.
                    </p>
                    <NavLink to="/blogs/view/1">Read <img src={arrow} /></NavLink>
                </div>
                <div data-aos="zoom-in" className="col blogs">
                    <img src={team_2} />
                    <h4>Maintaining Time And Works</h4>
                    <p className="p-text">
                        Explore our main service and offer we provide the best
                        service all over the world.
                    </p>
                    <NavLink to="/blogs/view/2">Read <img src={arrow} /></NavLink>
                </div>
                <div data-aos="zoom-in" className="col blogs">
                    <img src={team_2} />
                    <h4>Professional Dashboard Designing</h4>
                    <p className="p-text">
                        Explore our main service and offer we provide the best
                        service all over the world.
                    </p>
                    <NavLink to="/blogs/view/3">Read <img src={arrow} /></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
