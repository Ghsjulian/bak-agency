import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import agent_3 from "../assets/images/agent_3.png";
import WhyUs from "../components/WhyUs";
import OurServices from "../components/OurServices";

const Contact = () => {
    document.title =
        "Contact With Us - Contact with us anytime , and get our best opportunity";
    const messageRef = useRef(null);
    const socialRef = useRef(null);
    const sendRef = useRef(null);
    const [userName, setuserName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [userEmail, setuserEmail] = useState("");
    const [clientservice, setClientService] = useState("");
    const [address, setAddress] = useState("");
    const [clientCountry, setClientCountry] = useState("");
    const [clientMessanger, setMessanger] = useState("");
    const [instantType, setInstantType] = useState("");
    const [userMessage, setuserMessage] = useState("");
    const [isSelect, setSelect] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isSent, setSent] = useState(false);
    const baseURL = "http://bakdif.com/mail/contact.php";
    // const baseURL = "http://localhost:8080/mail/contact.php";
    function validatePhoneNumber(phoneNumber) {
        const phoneNumberRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
        if (phoneNumberRegex.test(phoneNumber)) {
            return true;
        }
        return false;
    }
    /**
     * Validates an email address.
     *
     * @param {string} email - The email address to validate.
     * @returns {boolean} True if the email is valid, false otherwise.
     */
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    const createMsg = (type, msg) => {
        messageRef.current.style.display = "block";
        let height = window.innerHeight;
        let width = window.innerWidth;
        let mobileHeight = 400;
        let desk = 150;
        window.scrollTo({
            top: width > 400 ? desk : mobileHeight,
            behavior: "smooth"
        });
        if (type) {
            messageRef.current.classList.remove("error");
            messageRef.current.classList.add("success");
            messageRef.current.textContent = msg;
        } else {
            messageRef.current.classList.remove("success");
            messageRef.current.classList.add("error");
            messageRef.current.textContent = msg;
        }
        setTimeout(() => {
            messageRef.current.style.display = "none";
            messageRef.current.textContent = "";
        }, 3000);
    };

    const handleContact = async e => {
        e.preventDefault();
        if (
            userName &&
            telephone &&
            userEmail &&
            userMessage &&
            address &&
            clientMessanger &&
            instantType &&
            clientCountry &&
            clientservice
        ) {
            if (!validateEmail(userEmail)) {
                createMsg(false, "Invalid Email Address!");
                return;
            } else if (!validatePhoneNumber(telephone)) {
                createMsg(false, "Invalid Phone Number!");
                return;
            }
            try {
                setSent(true);
                axios
                    .post(baseURL, {
                        payloads: "__ghs_julian__",
                        clent_name: userName,
                        client_phone: telephone,
                        client_email: userEmail,
                        client_address: address,
                        client_country: clientCountry,
                        client_service: clientservice,
                        client_messanger: clientMessanger,
                        instant_type:
                            socialRef.current.getAttribute("data") +
                            instantType,
                        client_message: userMessage
                    })
                    .then(response => {
                        setSent(false);
                        let height = window.innerHeight;
                        let width = window.innerWidth;
                        let mobileHeight = 780;
                        let desk = 150;
                        window.scrollTo({
                            top: width > 400 ? desk : mobileHeight,
                            behavior: "smooth"
                        });
                        sendRef.current.textContent = "Email Sent";
                        createMsg(
                            true,
                            "Your Email Has Been Successfully Sent !"
                        );
                        setClientCountry("");
                        setService("");
                        setAddress("");
                        setClientService("");
                        setuserEmail("");
                        setTelephone("");
                        setMessanger("");
                        setInstantType("");
                        setuserName("");
                        setuserMessage("");
                    });
            } catch (error) {
                console.log(error);
                setError(error);
                createMsg(false, error.message);
            }
        } else {
            createMsg(false, "Please Fill Out The Contact Form !");
        }
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

    const strMaker = str => {
        str = str.replace(/-/g, " ");
        str = str
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        return str;
    };

    useEffect(() => {
        getData();
        getService();
        if (isLoading) {
            return;
        }
    }, []);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <>
            <div
                data-aos="zoom-in"
                id="page"
                className="section contact-section"
            >
                <img
                    className="heading-img"
                    src="/images/Contact Header.png"
                    alt="Heading Image Here"
                />
                <div id="contact-section" className="two-row">
                    <div data-aos="zoom-in" className="image">
                        <img src="/images/Contact Us (1).svg" />

                        {/* 
                        <h3>More Contact Details : </h3>
                        <p className="addr">
                            USA Address- 1096 Genesee st buffalo NY 14211
                            Mobile- 7169483740
                        </p>
                        <p className="addr">
                            Bangladesh Address- Matarkapon Moulvibazar, Sylhet,
                            Bangladesh Mobile- +8809696132246
                        </p>
                        <p className="addr">
                            UAE Address- Hind Mohammed Ali Alowais Building,
                            Naif, 203, Deira, Dubai Mobile- 071543543980
                        </p>
                        */}
                    </div>
                    <div data-aos="zoom-in" className="form">
                        {/*
                        <h2> Contact With Us </h2>
                        <p className="text">
                            Feel free to reach out to us at any time. Our
                            dedicated team is always ready to assist you
                            promptly. Connect with us directly for immediate
                            assistance and let's stay in touch.
                        </p>
                        */}
                        <p className="text">
                            Feel free to reach out to us at any time. Our
                            dedicated team is always ready to assist you
                            promptly. Connect with us directly for immediate
                            assistance and let's stay in touch.
                        </p>
                        <h3>Fill Out This Form </h3>
                        <span
                            id="error-message"
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
                            type="tel"
                            onChange={e => {
                                setTelephone(e.target.value);
                            }}
                            placeholder="Enter Your Phone Number"
                            value={telephone}
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required
                        />
                        <input
                            type="email"
                            onChange={e => {
                                setuserEmail(e.target.value);
                            }}
                            placeholder="Enter Your Email"
                            value={userEmail}
                        />
                        <input
                            type="text"
                            onChange={e => {
                                setAddress(e.target.value);
                            }}
                            placeholder="Enter Your Address"
                            value={address}
                        />

                        <select
                            onChange={e => {
                                setClientService(e.target.value);
                            }}
                            value={clientservice}
                        >
                            <option>Select A Service</option>
                            {services &&
                                services.map((service, index) => {
                                    return (
                                        <option
                                            value={strMaker(service.type)}
                                            key={index + 1}
                                        >
                                            {strMaker(service.type)}
                                        </option>
                                    );
                                })}
                        </select>

                        <select
                            onChange={e => {
                                setClientCountry(e.target.value);
                            }}
                            value={clientCountry}
                        >
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
                        <select
                            ref={socialRef}
                            onChange={e => {
                                setMessanger(e.target.value);
                                setSelect(true);
                            }}
                            data={
                                "https://" +
                                clientMessanger.toLowerCase() +
                                ".com/"
                            }
                            value={clientMessanger}
                        >
                            <option>Select Instant Contact Messenger</option>
                            <option>Messenger</option>
                            <option>WhatsApp</option>
                            <option>Instagram</option>
                            <option>Twitter</option>
                            <option>Skype</option>
                            <option>Slack</option>
                            <option>Telegram</option>
                        </select>
                        {isSelect && (
                            <input
                                type="text"
                                onChange={e => {
                                    setInstantType(e.target.value);
                                }}
                                placeholder={`Enter Your ${clientMessanger} Username`}
                                value={instantType}
                            />
                        )}
                        <textarea
                            onChange={e => {
                                setuserMessage(e.target.value);
                            }}
                            placeholder="Type Your Message..."
                            value={userMessage}
                        ></textarea>
                        <button
                            ref={sendRef}
                            onClick={handleContact}
                            className="send-btn"
                        >
                            {isSent ? "Sending..." : "Send Now"}
                        </button>
                    </div>
                </div>
            </div>
            <br />
            <OurServices />
            <WhyUs />
        </>
    );
};

export default Contact;
