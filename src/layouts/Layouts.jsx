import { Outlet } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../assets/css/index.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/pages.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Layouts = ({ children }) => {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layouts;
