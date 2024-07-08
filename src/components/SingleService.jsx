import React, { useState, useEffect } from "react";

const SingleService = ({ data }) => {
    const [services, setServices] = useState(null);
    const [foundObject, setFoundObject] = useState(null);

    useEffect(() => {
        let url = "/services.json";
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setServices(data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
        if (services) {
            const found = services.find(obj => {
                if (obj.type === data.type) {
                    setFoundObject(obj);
                }
            });
        }
    }, [services]);
    return (
        <div data-aos="zoom-in" id="page" className="section">
            <div className="service-layouts">
                {!foundObject && <h2>Loading...</h2>}
                <br />
                <br />
                <br />
                {foundObject && (
                    <>
                        <img
                            src={foundObject.service_img}
                            alt={foundObject.service_heading}
                        /> 
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
