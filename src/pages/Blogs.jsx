import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import team_2 from "../assets/images/team_2.png";
import arrow from "../assets/icons/rightArrow.png";

const Blogs = () => {
    document.title =
        "Our Blogs & Articles - Read Our most useful blogs and know more about our services";
    const [blogs, setBlogs] = useState(null);
    useEffect(() => {
        let url = "/blogs.json";
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setBlogs(data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, [blogs]);

    return (
        <div data-aos="zoom-in" id="page" className="section">
            <h2> Explore Our Latest Blogs </h2>
            <p className="text">
                Stay ahead of the curve with the latest insights and trends in
                digital marketing and online services. Our blog is your go-to
                resource for expert advice, industry news, and thought
                leadership articles. From the benefits of outsourcing to a
                digital agency to the latest digital marketing techniques, our
                blog covers it all.
            </p>
            <div className="grid-row">
            {
                !blogs && <h2> Loading...</h2>
            }
                {blogs &&
                    blogs.map((blog, id) => {
                        return (
                            <div
                                data-aos="zoom-in"
                                className="card blogs"
                                key={id}
                            >
                                <img src={blog.blog_img} />
                                <h4>{blog.blog_title}</h4>
                                <p
                                    style={{ wordSpacing: "2px" }}
                                    className="p-text"
                                >
                                    {blog.blog_content}
                                    <NavLink to={`/blogs/view/${blog.blog_id}`}>
                                        Read More <img src={arrow} />
                                    </NavLink>
                                </p>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Blogs;
