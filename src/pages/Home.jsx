import React from "react";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import ArsenalSeo from "../components/ArsenalSeo";
import WhyUs from "../components/WhyUs";
const Home = () => {
    return (
        <>
            <HeroSection />
            <ServiceSection />
            <ArsenalSeo />
            <WhyUs />
        </>
    );
};

export default Home;
