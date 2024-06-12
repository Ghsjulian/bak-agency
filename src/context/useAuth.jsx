import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    return (
        <ApiContext.Provider >
            {children}
        </ApiContext.Provider>
    );
};

const useSite = () => {
     useContext(ApiContext);
};

export { ApiProvider, useSite, ApiContext };
