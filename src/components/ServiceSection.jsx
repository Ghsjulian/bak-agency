import React from "react";
import development from "../assets/images/development.png";
import coding from "../assets/icons/coding.png";
import task from "../assets/icons/typography.png";
import time from "../assets/images/graphicdesign.png";
import dashboard from "../assets/icons/video_editing.png";
import seo from "../assets/icons/seo.png";
import service from "../assets/images/service.png";

const ServiceSection = () => {
    return (
        <div  data-aos="zoom-in" className="section">
            <h2> What We Can Do ? </h2>
            <p className="text">
            Stay ahead of the competition with a robust digital strategy. Our team of experts will help you develop a customized online presence that resonates with your target audience and drives conversions. From e-commerce solutions to digital marketing campaigns, we've got you covered. Let's elevate your digital game!
            </p>
            <div className="row">
                <div data-aos="zoom-in" className="col">
                    <img src={development} />
                    <h4>Web Development & Design</h4>
                    <p className="p-text">
                    Transform your online presence with our expert web development and design services. From custom websites to e-commerce solutions, we craft digital experiences that drive engagement, conversions, and growth. Let us help you build a website that truly represents your brand.
                    </p>
                </div>
                <div data-aos="zoom-in" className="col">
                    <img src={seo} />
                    <h4>SEO And Optimization</h4>
                    <p className="p-text">
                    Optimization is the process of fine-tuning your website to ensure it loads quickly, is user-friendly, and provides a seamless experience for your visitors. A well-optimized website can improve your search engine rankings, increase engagement, and reduce bounce rates. By optimizing your website, you can create a positive user experience, build trust with your audience, and ultimately drive more conversions.
                    </p>
                </div>
                <div data-aos="zoom-in" className="col">
                    <img src={coding} />
                    <h4>Coding & IT Technology</h4>
                    <p className="p-text">
                    Expert coding and IT solutions for businesses, driving growth and productivity through custom software development, IT consulting, and innovative technology solutions.
                    </p>
                </div>
                <div data-aos="zoom-in" className="col">
                    <img src={time} />
                    <h4>Graphics Design</h4>
                    <p className="p-text">
                    Elevate your brand's visual appeal with our expert graphics design services. From logos to brochures, our team of skilled designers crafts visually stunning graphics that capture your brand's essence and leave a lasting impression on your audience.
                    </p>
                </div>
                <div data-aos="zoom-in" className="col">
                    <img src={dashboard} />
                    <h4>Video Editing & Production</h4>
                    <p className="p-text">
                    Take your video content to the next level with our professional video editing services. Our team of skilled editors crafts engaging, high-quality videos that captivate your audience and convey your message with clarity and precision.
                    </p>
                </div>
                <div data-aos="zoom-in" className="col">
                    <img src={task} />
                    <h4>Logo Design</h4>
                    <p className="p-text">
                    Make a strong first impression with a custom logo design that accurately represents your brand's values, mission, and personality. Our expert designers create unique, scalable, and versatile logos that help you stand out in a crowded market.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
