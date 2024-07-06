import React from "react";
import { NavLink } from "react-router-dom";
import demo1 from "../assets/images/project_1.jpg";
import demo2 from "../assets/images/demo1.jpg";
import demo3 from "../assets/images/demo2.jpg";
import demo4 from "../assets/images/demo4.jpg";
import demo5 from "../assets/images/demo5.jpg";
import demo6 from "../assets/images/demo6.jpg";

const Projects = () => {
    return (
        <div data-aos="zoom-in" className="section">
            <h2>Our Project & Works</h2>
            <div className="row">
                <div data-aos="zoom-in" id="projects" className="col">
                    <img src={demo1} alt="demo" />
                    <h4>E Commerce Shopping</h4>
                    <p className="p-text">
                        Shopping Cart website with responsive user friendly
                        layouts created by our team.
                    </p>
                    <NavLink to="/" className="btn--">
                        View
                    </NavLink>
                </div>
                <div data-aos="zoom-in" id="projects" className="col">
                    <img src={demo2} alt="demo" />
                    <h4>Relax Tea Selling</h4>
                    <p className="p-text">
                        An E Commerce Website For Selling Tea In online.
                        Professional business, it's responsive and user
                        friendly.
                    </p>
                    <NavLink to="/" className="btn--">
                        View
                    </NavLink>
                </div>
                <div data-aos="zoom-in" id="projects" className="col">
                    <img src={demo3} alt="demo" />
                    <h4>Office Management System</h4>
                    <p className="p-text">
                        A website with employee and office management system.
                        fully responsive and user friendly.
                    </p>
                    <NavLink to="/" className="btn--">
                        View
                    </NavLink>
                </div>
                <div data-aos="zoom-in" id="projects" className="col">
                    <img src={demo4} alt="demo" />
                    <h4>Premium Blogging Website</h4>
                    <p className="p-text">
                        Professional blogging website for writing and publishing
                        content it's seo friendly website. It has attractive
                        layouts.
                    </p>
                    <NavLink to="/" className="btn--">
                        View
                    </NavLink>
                </div>
                <div data-aos="zoom-in" id="projects" className="col">
                    <img src={demo5} alt="demo" />
                    <h4>Educational Math Solving</h4>
                    <p className="p-text">
                        A Program for solving Binary Mathematics easily. it is
                        useful for students.
                    </p>
                    <NavLink to="/" className="btn--">
                        View
                    </NavLink>
                </div>
                <div data-aos="zoom-in" id="projects" className="col">
                    <img src={demo6} alt="demo" />
                    <h4>Digital Agency Portfolio</h4>
                    <p className="p-text">
                        An Awesome digital web agency created by our web developer team.
                        it has responsive design and many more features.
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
