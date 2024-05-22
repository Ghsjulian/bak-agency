import React from "react";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import ArsenalSeo from "../components/ArsenalSeo";
import WhyUs from "../components/WhyUs";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import Location from "../components/Location";
const Home = () => {
    return (
        <>
            <HeroSection />
            <ServiceSection />
            <ArsenalSeo />
            <WhyUs />
            <Projects/>
            <Clients/>
            <Location/>
        </>
    );
};

export default Home;
