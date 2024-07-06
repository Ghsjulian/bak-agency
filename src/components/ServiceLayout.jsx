import React from "react";
import { useParams } from "react-router-dom";
import development from "../assets/images/development.png";
import coding from "../assets/icons/coding.png";
import task from "../assets/icons/task.png";
import time from "../assets/icons/time.png";
import dashboard from "../assets/icons/dashboard.png";
import seo from "../assets/icons/seo.png";
import service from "../assets/images/service.png";
import SingleService from "./SingleService";

const ServiceLayout = () => {
    const param = useParams();
    return <SingleService data={{ type: param.name }} />;
};

export default ServiceLayout;
