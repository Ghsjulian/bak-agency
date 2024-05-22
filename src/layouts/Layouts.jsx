import { Outlet } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import "../assets/css/index.css"
import "../assets/css/style.css"
import "../assets/css/responsive.css"

const Layouts = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default Layouts;
