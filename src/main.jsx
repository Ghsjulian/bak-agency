import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//import { ApiProvider } from "./context/useAuth";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
   {/* <ApiProvider>*/}
        <App />
       {/* </ApiProvider>*/}
    </React.StrictMode>
);
