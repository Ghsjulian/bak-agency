import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import ArsenalSeo from "../components/ArsenalSeo";
import WhyUs from "../components/WhyUs";
import Projects from "../components/Projects";
import Location from "../components/Location";
import { useSite } from "../context/useAuth";

const Home = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }), [];
    });
    const { siteData } = useSite();
    if (siteData !== null) {
        document.title = siteData.hero_section.title;
        // const siteData = { name: "Ghs Julian" };
        return (
            <>
                <HeroSection data={siteData.hero_section} />
                <ServiceSection data={siteData} />
                <ArsenalSeo data={siteData} />
                <WhyUs data={siteData} />
                <Projects data={siteData} />
                <Location data={siteData} />
            </>
        );
    }
};

export default Home;
