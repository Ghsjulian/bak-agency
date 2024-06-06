import React, { useState, useEffect, useRef } from "react";
import axios from "axios"
import agent_3 from "../assets/images/agent_3.png";

const Contact = () => {
    const messageRef = useRef(null);
    const [userName, setuserName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [userEmail, setuserEmail] = useState("");
    const [userMessage, setuserMessage] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const baseURL = "http://localhost:8080/server/client-contact";
    const handleContact = async e => {
        e.preventDefault();
        if (userName && telephone && userEmail && userMessage) {
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
                        console.log(response.data)
                        setData(response.data);
                        messageRef.current.style.display = "block";
                        messageRef.current.classList.remove("error");
                        messageRef.current.classList.add("success");
                        messageRef.current.textContent = response.data;
                    });
            } catch (error) {
                console.log(error)
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

    return (
        <div data-aos="zoom-in" id="page" className="section">
            <h2> Contact With Us </h2>
            <div className="two-row">
                <div data-aos="zoom-in" className="image">
                    <img src={agent_3} />
                </div>
                <div data-aos="zoom-in" className="form">
                    <p className="text">
                        Full free to contact with us , our team will response
                        you as soon as possible. You can directly contact us and
                        get touch with us.
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
    );
};

export default Contact;
