import React from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { CheckOutlined } from "@ant-design/icons";
import Auth from "../utils/auth";
//team is not getting rendering
const Employee = () => {
    const { username: userParam } = useParams();
    const user = Auth.getProfile().data;

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: user.username },
    });

    console.log("username", user.username);

    console.log("data", data);
    //console.log(data);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.username) {
        return <h4>You need to be logged in to see your page. </h4>;
    }
    const confirmDelivery = (e) => {
        e.preventDefault();
        alert("Confirmation Mail Sent");
    };
    return (
        <div>
            <div>
                <h2>Welcome {user.username}.</h2>
                <h3>Your Email {user.useremail}</h3>
                <h3>Your are a registered {user.usercategory} with Naf Construction Supplies.</h3>
                <h3>Items Scheduled for delivery</h3>
                <h4>Delivery Order Created At</h4>
                <h4>Site Address</h4>
                <h4>Items</h4>
            </div>
            <form
                className="flex-row justify-center justify-space-between-md align-center"
                style={{ border: "1px dotted #1a1a1a" }}
            >
                <div className="col-12 col-lg-9">
                    <label>Enter the code</label>
                    <input className="form-input w-100" type="text" placeholder="Code "></input>
                </div>
                <div className="col-12 col-lg-3">
                    <button className="btn  btn-block py-3" onClick={confirmDelivery}>
                        <CheckOutlined />
                        Confirm Delivery
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Employee;
