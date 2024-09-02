import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import agent_3 from "../assets/images/agent_3.png";
import WhyUs from "../components/WhyUs";
import ServiceSection from "../components/ServiceSection";

const Contact = () => {
    document.title =
        "Contact With Us - Contact with us anytime , and get our best opportunity";
    const messageRef = useRef(null);
    const [userName, setuserName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [userEmail, setuserEmail] = useState("");
    const [subject, setuserSubject] = useState("");
    const [userMessage, setuserMessage] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const baseURL = "http://localhost:8080/server/client-contact";
    const handleContact = async e => {
        e.preventDefault();
        if (userName && telephone && userEmail && subject && userMessage) {
            try {
                axios
                    .post(baseURL, {
                        payloads: "__ghs_julian__",
                        user_name: userName,
                        user_phone: telephone,
                        user_email: userEmail,
                        user_message: userMessage
                    })
                    .then(response => {
                        console.log(response.data);
                        setData(response.data);
                        messageRef.current.style.display = "block";
                        messageRef.current.classList.remove("error");
                        messageRef.current.classList.add("success");
                        messageRef.current.textContent = response.data;
                    });
            } catch (error) {
                console.log(error);
                setError(error);
                messageRef.current.style.display = "block";
                messageRef.current.classList.remove("success");
                messageRef.current.classList.add("error");
                messageRef.current.textContent = error;
            }
        } else {
            messageRef.current.style.display = "block";
            messageRef.current.classList.remove("success");
            messageRef.current.classList.add("error");
            messageRef.current.textContent =
                "Please Fill Out The Contact Form !";
        }
        setTimeout(() => {
            messageRef.current.style.display = "none";
            messageRef.current.textContent = "";
        }, 3000);
    };

    const [countries, setCountry] = useState([]);
    const [services, setService] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getData = async () => {
        let url = "/country-by-name.json";
        try {
            setIsLoading(true);
            const response = await fetch(url);
            const responseData = await response.json();
            setCountry(responseData);
            setIsLoading(false);
        } catch (error) {
            console.error("Error : ", error);
        }
    };
    const getService = async () => {
        let url = "/data.json";
        try {
            setIsLoading(true);
            const response = await fetch(url);
            const responseData = await response.json();
            setService(responseData);
            setIsLoading(false);
        } catch (error) {
            console.error("Error : ", error);
        }
    };
    useEffect(() => {
        getData();
        getService()
        if (isLoading) {
            return;
        }
    }, []);

    return (
        <>
            <div data-aos="zoom-in" id="page" className="section">
                <div className="two-row">
                    <div data-aos="zoom-in" className="image">
                        <img src="/images/contact_1.png" />
                    </div>
                    <div data-aos="zoom-in" className="form">
                        <h2> Contact With Us </h2>
                        <p className="text">
                            Feel free to reach out to us at any time. Our
                            dedicated team is always ready to assist you
                            promptly. Connect with us directly for immediate
                            assistance and let's stay in touch.
                        </p>
                        <h3>Fill Out This Form </h3>
                        <span
                            ref={messageRef}
                            style={{ display: "none" }}
                            className=""
                        ></span>
                        <input
                            type="text"
                            onChange={e => {
                                setuserName(e.target.value);
                            }}
                            placeholder="Enter Your Name"
                            value={userName}
                        />
                        <input
                            type="number"
                            onChange={e => {
                                setTelephone(e.target.value);
                            }}
                            placeholder="Enter Your Phone Number"
                            value={telephone}
                        />
                        <input
                            type="email"
                            onChange={e => {
                                setuserEmail(e.target.value);
                            }}
                            placeholder="Enter Your Email"
                            value={userEmail}
                        />
                        <select>
                            <option>Select A Service</option>
                            {services &&
                                services.map((service, index) => {
                                    return (
                                        <option
                                            value={service.type}
                                            key={index + 1}
                                        >
                                            {service.type}
                                        </option>
                                    );
                                })}
                        </select>
                        <select>
                            <option>Select Your Country</option>
                            {countries &&
                                countries.map((cntr, index) => {
                                    return (
                                        <option
                                            value={cntr.country}
                                            key={index + 1}
                                        >
                                            {cntr.country}
                                        </option>
                                    );
                                })}
                        </select>
                        <select>
                            <option>Select Instant Contact Messenger</option>
                            <option>Messenger</option>
                            <option>WhatsApp</option>
                            <option>Instagram</option>
                            <option>Twitter</option>
                            <option>Skype</option>
                            <option>WeChat</option>
                            <option>Telegram</option>
                        </select>

                        {/*<input
                            type="text"
                            onChange={e => {
                                setuserSubject(e.target.value);
                            }}
                            placeholder="Enter Your Subject"
                            value={subject}
                        />*/}
                        <textarea
                            onChange={e => {
                                setuserMessage(e.target.value);
                            }}
                            placeholder="Type Your Message..."
                            value={userMessage}
                        ></textarea>
                        <button onClick={handleContact} className="send-btn">
                            Send Now
                        </button>
                    </div>
                </div>
            </div>
            <ServiceSection />
            <WhyUs />
        </>
    );
};

export default Contact;
