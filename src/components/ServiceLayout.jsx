import React from "react";
import development from "../assets/images/development.png";
import coding from "../assets/icons/coding.png";
import task from "../assets/icons/task.png";
import time from "../assets/icons/time.png";
import dashboard from "../assets/icons/dashboard.png";
import seo from "../assets/icons/seo.png";
import service from "../assets/images/service.png";
import SingleService from "./SingleService";

const ServiceLayout = () => {
    return <SingleService data={{ seo, development }} />;
};

export default ServiceLayout;
