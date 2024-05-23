import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useScrollTop = () => {
    useEffect(() =>{ window.scrollTo({ top: 0, behavior: "smooth" }), []});
};

export default useScrollTop;
