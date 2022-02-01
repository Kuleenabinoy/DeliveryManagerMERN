import React from "react";

import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

//import ItemsList from "../components/ItemsList";
//import ItemForm from "../components/ItemForm";

import { QUERY_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
    const { username: userParam } = useParams();

    // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
    });

    // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
    const user = data?.me || data?.user || {};

    // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.username) {
        return <Redirect to="/me" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.username) {
        return <h4>You need to be logged in to see your page. Use the navigation links above to sign up or log in!</h4>;
    }

    return (
        <div>
            <h2>Employee Page</h2>
        </div>
    );
};

export default Profile;
