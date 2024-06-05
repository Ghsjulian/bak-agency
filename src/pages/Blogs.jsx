import React from "react";
import { NavLink } from "react-router-dom";
import team_2 from "../assets/images/team_2.png";

const Blogs = () => {
    return (
        <div data-aos="zoom-in" className="section">
            <h2> What We Can Do ? </h2>
            <h3>Driving Digital Growth Through Expert SEO Solutions</h3>
            <p className="text">
                Explore our main service and offer we provide the best service
                all over the world , if you want to get our service please
                contact us right now we'll response you as soon as possible.
            </p>
            <div className="row">
                <div data-aos="zoom-in" className="col blogs">
                    <img src={team_2} />
                    <h4>Coding & IT Technology</h4>
                    <p className="text-content">
                        Explore our main service and offer we provide the best
                        service all over the world.
                    </p>
                    <NavLink to="/blogs/view/1">Read</NavLink>
                </div>
                <div data-aos="zoom-in" className="col blogs">
                    <img src={team_2} />
                    <h4>Maintaining Time And Works</h4>
                    <p className="text-content">
                        Explore our main service and offer we provide the best
                        service all over the world.
                    </p>
                    <NavLink to="/blogs/view/2">Read</NavLink>
                </div>
                <div data-aos="zoom-in" className="col blogs">
                    <img src={team_2} />
                    <h4>Professional Dashboard Designing</h4>
                    <p className="text-content">
                        Explore our main service and offer we provide the best
                        service all over the world.
                    </p>
                    <NavLink to="/blogs/view/3">Read</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
