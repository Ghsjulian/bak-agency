import React, { useState, useEffect } from "react";


const SingleService = ({ data }) => {
    const arr = [
        {
            type: "web-development",
            service_img:
                "http://localhost:8080/server/assets/images/agent_3.png",
            service_heading: "Web Development & Design",
            service_description:
                "   We serve the best design and professional website, our employees are so good they build professional and user-friendly website . supposed you have planned for making a good qualities website , such as e commerce, template building and many more . Kindly please contact us. Explore our main service and offer we provide the best service all over the world , if you want to get ourservice please contact us right now we'll response you as soon as possible."
        },
        {
            type: "graphics-desgin",
            service_img:
                "http://localhost:8080/server/assets/images/agent_3.png",
            service_heading: "Graphics Desgin And Logo",
            service_description:
                "   We serve the best design and professional website, our employees are so good they build professional and user-friendly website . supposed you have planned for making a good qualities website , such as e commerce, template building and many more . Kindly please contact us. Explore our main service and offer we provide the best service all over the world , if you want to get ourservice please contact us right now we'll response you as soon as possible."
        },
        {
            type: "seo-analysis",
            service_img:
                "http://localhost:8080/server/assets/images/agent_3.png",
            service_heading: "Web Development & Design",
            service_description:
                "   We serve the best design and professional website, our employees are so good they build professional and user-friendly website . supposed you have planned for making a good qualities website , such as e commerce, template building and many more . Kindly please contact us. Explore our main service and offer we provide the best service all over the world , if you want to get ourservice please contact us right now we'll response you as soon as possible."
        },
        {
            type: "video-editing",
            service_img:
                "http://localhost:8080/server/assets/images/agent_3.png",
            service_heading: "Web Development & Design",
            service_description:
                "   We serve the best design and professional website, our employees are so good they build professional and user-friendly website . supposed you have planned for making a good qualities website , such as e commerce, template building and many more . Kindly please contact us. Explore our main service and offer we provide the best service all over the world , if you want to get ourservice please contact us right now we'll response you as soon as possible."
        },
        {
            type: "content-writing",
            service_img:
                "http://localhost:8080/server/assets/images/agent_3.png",
            service_heading: "Web Development & Design",
            service_description:
                "   We serve the best design and professional website, our employees are so good they build professional and user-friendly website . supposed you have planned for making a good qualities website , such as e commerce, template building and many more . Kindly please contact us. Explore our main service and offer we provide the best service all over the world , if you want to get ourservice please contact us right now we'll response you as soon as possible."
        }
    ];
  
        const matchingItem = arr.find(item => item.type);
        if (data.type.name === matchingItem.type) {
            return (
                <div data-aos="zoom-in" id="page" className="section">
                    <div className="service-layouts">
                        <img src={matchingItem.service_img} />
                        <h2>{matchingItem.service_heading}</h2>
                        <p className="service-description">
                            {matchingItem.service_description}
                        </p>
                    </div>
                </div>
            );
        }
};

export default SingleService;
