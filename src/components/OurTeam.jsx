import React, { useState, useEffect } from "react";
import OurServices from "./OurServices";
import WhyUs from "./WhyUs";
const OurTeam = () => {
    document.title = "Our Team - See Our Team Members";
    const [team, setTeam] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getData = async () => {
        let url = "/our-team.json";
        try {
            setIsLoading(true);
            const response = await fetch(url);
            const responseData = await response.json();
            setTeam(responseData);
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
    }, [isLoading]);

    return (
        <>
            <div data-aos="zoom-in" id="page" className="section">
                <h2> Our Team Members </h2>
                <p style={{ marginTop: ".7rem" }} className="text">
                    Meet our team expertises. We have a group of team and we can
                    handle any task byu sharing our experience. Here is our team
                    members name and their skills and experienc.
                </p>
                <div className="grid-row">
                    {team.length > 0 &&
                        team.map((el, index) => {
                            return (
                                <div className="card" key={el.id}>
                                    <img src={el.img} alt={el.name} />
                                    <h3>{el.name}</h3>
                                    <h4>{el.skill} </h4>
                                    <p>{el.desc.slice(0,156)}</p>
                                </div>
                            );
                        })}

                    {/*
                <div className="card">
                    <img src={client_1} alt="Team Ghs Julian" />
                    <h3> Ghs Julian</h3>
                    <h4> Web Developer And Designer </h4>
                    <p>
                        He is an expert web developer and desginer , he create
                        or develop any website easily.
                    </p>
                </div>
                <div className="card">
                    <img src={client2} alt="Team Ghs Julian" />
                    <h3>Devid Smith</h3>
                    <h4> Graphics Designer </h4>
                    <p>
                        He is an expert graphics ,logo and desginer , he create
                        or develop any design easily.
                    </p>
                </div>
                <div className="card">
                    <img src={client4} alt="Team Ghs Julian" />
                    <h3> Alina Lopez</h3>
                    <h4> SEO Specialist</h4>
                    <p>
                        She is an expert SEO Specialist, She create or develop
                        any website easily.
                    </p>
                </div>
                <div className="card">
                    <img src={client1} alt="Team Ghs Julian" />
                    <h3>Jessica Kaur</h3>
                    <h4> Professional Content Creator</h4>
                    <p>
                        She is an expert content creator and desginer , she create
                        or develop any website easily.
                    </p>
                </div>
                */}
                </div>
            </div>
            <OurServices />
            <WhyUs />
        </>
    );
};

export default OurTeam;
