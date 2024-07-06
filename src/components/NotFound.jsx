import React from "react";
import { NavLink } from "react-router-dom";
import notfound from "../assets/images/404_1.jpg";

const NotFound = () => {
    document.title = "ERROR : 404 Page Not Found | The Page You Tried To Access Is Not Accessible"
    return (
        <section
            style={{
                position: "relative",
                width: "100vw",
                height: "100vh",
                backgroundColor: "#ffffff",
                diaplay: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center"
            }}
        >
            <img
                style={{
                    textAlign: "center",
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    margin: ".7rem auto"
                }}
                src={notfound}
                alt="Page Not Found"
            />
            <h3
                style={{
                    textDecoration: "none",
                    margin: ".5rem auto",
                    color: "#d54000",
                    fontWeight: "900",
                    textAlign: "center"
                }}
            >
                Page Not Found !
            </h3>
            <NavLink
                style={{
                    margin: ".5rem auto",
                    color: "#00685b",
                    fontWeight: "900",
                    fontSize: "18px",
                    textAlign: "center",
                    padding: ".5rem .8rem",
                    borderRadius: "8px"
                }}
                to="/"
            >
                Go To Home
            </NavLink>
        </section>
    );
};

export default NotFound;
