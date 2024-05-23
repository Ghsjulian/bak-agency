import React from "react";
import { NavLink } from "react-router-dom";
import project_1 from "../assets/images/project_1.jpg";

const Projects = () => {
    return (
        <div data-aos="zoom-in" className="section">
            <h2>Our Project & Works</h2>
            <div className="row">
                <div data-aos="zoom-in" id="projects" className="col">
                    <img src={project_1} />
                    <h4>Quick Shopping</h4>
                    <p className="p-text">
                        The professional e commerce website building by our team
                        and agency , we can provide any kinda website you want ,
                        we'll design and as soon as possible we give the best
                        service to our clients.
                    </p>
                    <NavLink to="/" className="btn--">
                        View
                    </NavLink>
                </div>
                <div data-aos="zoom-in" id="projects" className="col">
                    <img src={project_1} />
                    <h4>Quick Shopping</h4>
                    <p className="p-text">
                        The professional e commerce website building by our team
                        and agency , we can provide any kinda website you want ,
                        we'll design and as soon as possible we give the best
                        service to our clients.
                    </p>
                    <NavLink to="/" className="btn--">
                        View
                    </NavLink>
                </div>
                <div data-aos="zoom-in" id="projects" className="col">
                    <img src={project_1} />
                    <h4>Quick Shopping</h4>
                    <p className="p-text">
                        The professional e commerce website building by our team
                        and agency , we can provide any kinda website you want ,
                        we'll design and as soon as possible we give the best
                        service to our clients.
                    </p>
                    <NavLink to="/" className="btn--">
                        View
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Projects;
