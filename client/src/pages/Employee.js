import React from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";
//team is not getting rendering
const Employee = () => {
    const { username: userParam } = useParams();
    const user = Auth.getProfile().data;

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: user.username },
    });
    debugger;
    console.log("username", user.username);

    console.log("data", data);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.username) {
        return <h4>You need to be logged in to see your page. </h4>;
    }

    return (
        <div>
            <div>
                <h2>Welcome {user.username}.</h2>
                <h2>Your Email {user.useremail}</h2>
                <h2>Your are a registered {user.usercategory} with Naf Construction Supplies.</h2>
                <h3>Items Scheduled for you for delivery</h3>
                <h4>Delivery Order Created At</h4>
                <h4>Site Address</h4>
                <h4>Items</h4>
            </div>
        </div>
    );
};

export default Employee;
