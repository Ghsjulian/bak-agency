import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import ArsenalSeo from "../components/ArsenalSeo";
import WhyUs from "../components/WhyUs";
import Projects from "../components/Projects";
import Location from "../components/Location";

const Home = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }), [];
    });

        return (
            <>
                <HeroSection/>
                <ServiceSection/>
                <ArsenalSeo/>
                <WhyUs/>
                <Projects/>
                <Location/>
            </>
        );
};

export default Home;
