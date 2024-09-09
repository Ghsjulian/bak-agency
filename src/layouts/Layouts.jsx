import { Outlet } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/css/index.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/pages.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Layouts = ({ children }) => {
    const location = useLocation();
    const [path, setPath] = useState("");
    const [prevPath, setPrevPath] = useState("");
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        AOS.init();
        AOS.refresh();
        setPath(location.pathname);
        setPrevPath(location.pathname);
    }, [children]);
    
    return (
        <>
        {
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layouts;
