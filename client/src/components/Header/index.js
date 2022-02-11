import React from "react";
// Import React Router Link component for internal hyperlinks
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { LoginOutlined } from "@ant-design/icons";
import { LogoutOutlined, UserAddOutlined } from "@ant-design/icons";

const styles = {
    headerStyle: {
        background: "#505d8c",
        margin: 5,
    },
    headingStyle: {
        //align: "left",
        margin: "10px",
        padding: "10px",
    },
    btnStyle: {
        background: "#505d8c",
        cursor: "pointer",
        color: "black",
        margin: 5,
    },
    spanStyle: {
        margin: 15,
    },
};
const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
        window.location.assign("/");
    };
    return (
        // <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
        <header style={styles.headerStyle} className="header">
            <div>
                {/* <div className="container flex-column justify-space-between-lg justify-center align-center text-center"> */}
                {/* Use Link component to create a link that returns to the homepage on click */}
                <Link className=" text-dark" to="/">
                    {/* <h1 className="m-0" style={{ fontSize: "2rem" }}> */}
                    <h1 className="heading" style={styles.headingStyle}>
                        Delivery Manager
                    </h1>
                </Link>
                {/* <h3>
                    <span style={styles.spanStyle}>Naf-Supplies</span>
                </h3> */}
                <div>
                    {/* {console.log("Auth.getProfile().data", Auth.getProfile().data)} */}
                    {Auth.loggedIn() ? (
                        <>
                            {/* <Link className="btn btn-lg btn-info m-2" to="/me">
                                {Auth.getProfile().data.username}'s profile
                            </Link> */}
                            {Auth.getProfile().data.usercategory === "manager" ? (
                                <Link style={styles.btnStyle} className="btn btn-lg btn-info m-2" to="/signup">
                                    <UserAddOutlined /> Add profiles
                                </Link>
                            ) : (
                                ""
                            )}
                            <button style={styles.btnStyle} className="btn btn-lg btn-info m-2 " onClick={logout}>
                                <LogoutOutlined /> Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link style={styles.btnStyle} className="btn btn-lg btn-info m-2" to="/login">
                                <LoginOutlined /> Login
                            </Link>

                            {/* <Link style={styles.btnStyle} className="btn  btn-lg btn-info m-2" to="/logout">
                                <LogoutOutlined /> Logout
                            </Link> */}
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
