import { Outlet } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"
import "../assets/css/index.css"
import "../assets/css/style.css"
import "../assets/css/responsive.css"
import "../assets/css/pages.css"

const Layouts = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer/>
        </>
    );
};

export default Layouts;
