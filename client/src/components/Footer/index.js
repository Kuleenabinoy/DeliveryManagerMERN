import React from "react";
// Import hooks from React Router
import { useLocation, useHistory } from "react-router-dom";
import { CopyrightOutlined, StepBackwardOutlined } from "@ant-design/icons";

const Footer = () => {
    // We retrieve the current `location` object data from React Router
    const location = useLocation();
    // We get React Router's history object so we can access and adjust browser history
    const history = useHistory();
    return (
        <footer className="w-100 mt-auto text-dark p-4">
            <div className="container text-center mb-5">
                {location.pathname !== "/" && (
                    <button
                        className="btn  mb-3"
                        // Go back to the previous page in our browser's history
                        onClick={() => history.goBack()}
                    >
                        <StepBackwardOutlined /> Go Back
                    </button>
                )}
                <h4>
                    <CopyrightOutlined /> {new Date().getFullYear()} -Naf Delivery Manager
                </h4>
            </div>
        </footer>
    );
};

export default Footer;
