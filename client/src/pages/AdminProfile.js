import React from "react";

import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import Auth from "../utils/auth";

if (Auth.loggedIn() && Auth.getProfile().data.username) {
    return <Redirect to="/admin" />;
}
