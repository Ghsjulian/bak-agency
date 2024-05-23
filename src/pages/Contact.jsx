import React, { useState, useEffect } from "react";
import deliveryman from "../assets/icons/deliveryman.png";

const Contact = () => {
    const [userName, setuserName] = useState("");
    const [userEmail, setuserEmail] = useState("");
    const [userMessage, setuserMessage] = useState("");
    const handleContact = e => {
        e.preventDefault();
        alert(userName);
    };
    return (
        <div data-aos="zoom-in" id="contact-form" className="section">
            <h2> Contact With Us </h2>
            <div className="two-row">
                <div data-aos="zoom-in" className="image">
                    <img src={deliveryman} />
                </div>
                <div data-aos="zoom-in" className="form">
                    <p className="text">
                        Full free to contact with us , our team will response
                        you as soon as possible. You can directly contact us and
                        get touch with us.
                    </p>
                    <h3>Fill Out This Form </h3>
                    <input
                        type="text"
                        onChange={e => {
                            setuserName(e.target.value);
                        }}
                        placeholder="Enter Your Name"
                        value={userName}
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
