import React, { useState, useEffect } from "react";
import arr from "../layouts/OurServices";
import img from "../assets/images/agent.png";

const SingleService = ({ data }) => {
    const [foundObject, setFoundObject] = useState(null);
    useEffect(() => {
        const found = arr.find(obj => {
            if (obj.type === data.type) {
                setFoundObject(obj);
            }
        });
    }, []);
    return (
        <div data-aos="zoom-in" id="page" className="section">
            <div className="service-layouts">
                {!foundObject && <h2>Loading...</h2>}
                <br /><br/>
                {foundObject && (
                    <>
                        <img src={img} />
                        {/*
                        <img
                            src={foundObject.service_img}
                            alt={foundObject.service_heading}
                        /> */}
                        <h2>{foundObject.service_heading}</h2>
                        <p className="service-description">
                            {foundObject.service_description}
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default SingleService;
