import React from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Employee = () => {
    const { username: userParam } = useParams();
    const user = Auth.getProfile().data;

    // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: user.username },
    });

    debugger;
    console.log(user, "user");

    // console.log("userName", userParam);
    // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
    //const user = data?.me || data?.user || {};
    //console.log("user in employee page", Auth.getProfile().data);

    // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
    // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    //     return <Redirect to="/me" />;
    // }
    // const user1 = data?.me || data?.user || {};
    // console.log("user1", user);
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
                <h4>DeliveryOrder Created At</h4>
                <h4>Site Address</h4>
                <h4>Items</h4>
                {/* <h2>You have delivery to {siteInfo}site</h2> */}
                {/* <ItemsList user={user.username} title={`${user.username}'s items`} /> */}
                {/* <ProfileForm /> */}
            </div>

            {/* <h2 className="card-header">Deliver Note created At {data.createdAt}</h2>
                <h2 className="card-header">Deliver to {team.siteInfo}</h2>
                <h2 className="card-header">{team.name}'s items to pick from warehouse...</h2> */}
            {/* <ProfileForm siteinfo={user.siteinfo} /> */}
            {/* <ProfileForm siteinfo={user.sitenfo} items={user.items} /> */}
        </div>
    );
};

export default Employee;
