import React from "react";

const SingleService = ({data}) => {
    return (
        <div data-aos="zoom-in" id="page" className="section">
            <div className="service-layouts">
                <img src={data.development} />
                <h2>Web Development & Design</h2>
                <p className="service-description">
                    We serve the best design and professional website, our
                    employees are so good they build professional and
                    user-friendly website . supposed you have planned for making
                    a good qualities website , such as e commerce, template
                    building and many more . Kindly please contact us. Explore
                    our main service and offer we provide the best service all
                    over the world , if you want to get our service please
                    contact us right now we'll response you as soon as possible.
                </p>
            </div>
        </div>
    );
};

export default SingleService;
