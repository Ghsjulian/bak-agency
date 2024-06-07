import React, { useState, useEffect } from "react";
import axios from "axios";

const SingleService = ({ data }) => {
    const baseURL = "http://localhost:8080/server/services";
    const [siteData, setSiteData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                axios
                    .post(baseURL, {
                        payloads: "__ghs_julian__"
                    })
                    .then(response => {
                        setSiteData(response.data);
                        setLoading(false);
                    });
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return; // or a loading spinner, etc.
    }

    if (error) {
        return; // or an error message, etc.
    }
    if (siteData != null) {
        return (
            <>
            
            
              {
                siteData.map((data, index) => {
                    return <h1> {data.service_heading} </h1>;
                })
              }
                
                
                
                
                
                
                
                
                {/*
                <div data-aos="zoom-in" id="page" className="section">
                    <div className="service-layouts">
                        <img src={data.development} />
                        <h2>
                            Web Development & Design{" "}
                            {siteData.web_development.service_heading}
                        </h2>
                        <p className="service-description">
                            We serve the best design and professional website,
                            our employees are so good they build professional
                            and user-friendly website . supposed you have
                            planned for making a good qualities website , such
                            as e commerce, template building and many more .
                            Kindly please contact us. Explore our main service
                            and offer we provide the best service all over the
                            world , if you want to get our service please
                            contact us right now we'll response you as soon as
                            possible.
                        </p>
                    </div>
                </div>
                */}
            </>
        );
    }
};

export default SingleService;
