import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    const baseURL = "http://localhost:8080/site-info";
    const [siteData, setSiteData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                axios
                    .post(baseURL, {
                        payloads: "__ghs_julian__"
                    })
                    .then(response => {
                        setSiteData(response.data);
                    });
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [siteData]);

    return (
        <ApiContext.Provider value={{ siteData, loading, error }}>
            {children}
        </ApiContext.Provider>
    );
};
const useSite = () => {
    return useContext(ApiContext);
};
export { ApiProvider, useSite, ApiContext };
