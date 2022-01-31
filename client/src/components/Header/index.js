import { left } from "@popperjs/core";
import React from "react";
// Import React Router Link component for internal hyperlinks
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
const styles = {
    headerStyle: {
        background: "#505d8c",
        margin: 5,
    },
    headingStyle: {
        align: left,
        margin: 20,
    },
};
const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        // <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
        <header style={styles.headerStyle} className="header">
            <div style={styles.headingStyle} className="heading">
                {/* <div className="container flex-column justify-space-between-lg justify-center align-center text-center"> */}
                {/* Use Link component to create a link that returns to the homepage on click */}
                <Link className="text-dark" to="/">
                    <h1 className="m-0" style={{ fontSize: "2rem" }}>
                        Delivery Manager
                    </h1>
                </Link>
                <p className="m-0" style={{ fontSize: "1.75rem", fontWeight: "700" }}>
                    Manage Site Delivery.
                </p>
                <div>
                    {/* {console.log("Auth.getProfile().data", Auth.getProfile().data)} */}
                    {Auth.loggedIn() ? (
                        <>
                            <Link className="btn btn-lg btn-info m-2" to="/me">
                                {Auth.getProfile().data.username}'s profile
                            </Link>
                            {Auth.getProfile().data.usercategory === "manager" ? (
                                <Link className="btn btn-lg btn-info m-2" to="/me">
                                    Add profiles
                                </Link>
                            ) : (
                                ""
                            )}
                            <button className="btn btn-lg btn-light m-2" onClick={logout}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link className="btn btn-lg btn-info m-2" to="/login">
                                Login
                            </Link>
                            <Link className="btn btn-lg btn-light m-2" to="/signup">
                                Signup
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
