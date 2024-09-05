import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import parse from "html-react-parser";
import WhyUs from "./WhyUs";
import { useParams } from "react-router-dom";

const SingleService = ({ data }) => {
    const [services, setServices] = useState(null);
    const [foundObject, setFoundObject] = useState(null);
    const param = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const getData = async () => {
        let url = "/data.json";
        try {
            setIsLoading(true);
            const response = await fetch(url);
            const responseData = await response.json();
            setServices(responseData);
            setIsLoading(false);
        } catch (error) {
            console.error("Error : ", error);
        }
    };
    useEffect(() => {
        getData();
        if (isLoading) {
            return;
        }
        if (!isLoading) {
            const found = services.find(obj => {
                if (obj.type === param.name) {
                    setFoundObject(obj);
                }
            });
        }
        // console.log("Found Object : ",foundObject)
    }, [isLoading, param.name]);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [param.name]);

    return (
        <>
            <div data-aos="zoom-in" id="page" className="section">
                {/* { isLoading && <div style={{marginTop : "5rem"}} className="loading"><h2>Loading...</h2></div>} */}

                {foundObject && (
                    <>
                        <div className="service-header">
                            <img
                                data-aos="zoom-in"
                                src={foundObject.service_header_img}
                                alt={data.type}
                            />
                            <h2>{foundObject.header_title}</h2>
                            <div className="service-flex">
                                <div data-aos="zoom-in" className="flex">
                                    {foundObject.left_service_tools.map(
                                        (list, key) => {
                                            return (
                                                <li key={key}>
                                                    <span>
                                                        <i className="bx bx-check-circle"></i>
                                                    </span>
                                                    <span className="smm_content">
                                                        {list}
                                                    </span>
                                                </li>
                                            );
                                        }
                                    )}
                                </div>

                                <div data-aos="zoom-in" className="flex">
                                    {foundObject.right_service_tools.map(
                                        (li, i) => {
                                            return (
                                                <li key={i}>
                                                    <span>
                                                        <i className="bx bx-check-circle"></i>
                                                    </span>
                                                    <span className="smm_content">
                                                        {li}
                                                    </span>
                                                </li>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="service-desc">
                            <div className="service-col">
                                <h4>{foundObject.service_title}</h4>
                                <p>{foundObject.service_desc}</p>
                                <h4
                                    style={{
                                        textAlign: "center",
                                        fontSize: "1.6rem",
                                        marginTop: "4.5rem",
                                        margin: ".5rem auto"
                                    }}
                                >
                                    {foundObject.strategy_heading}
                                </h4>
                            </div>
                            <div data-aos="zoom-in" className="service-col">
                                <img
                                    src={foundObject.feture_img}
                                    alt="Feture Image"
                                />
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="next-service">
                            {parse(foundObject.strategy_desc)}
                        </div>
                        <div data-aos="zoom-in" className="bottom-text">
                            {parse(foundObject.service_bootom)}
                        </div>
                    </>
                )}
            </div>
            <WhyUs />
        </>
    );
};

export default SingleService;
