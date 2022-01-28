import React from "react";

// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import ItemsList from "../components/ItemsList";
import ItemForm from "../components/ItemForm";

import { QUERY_SINGLE_TEAM } from "../utils/queries";

const Team = () => {
    // Use `useParams()` to retrieve value of the route parameter `:profileId`
    const { teamId } = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_TEAM, {
        // pass URL parameter
        variables: { teamId: teamId },
    });

    const team = data?.team || {};

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h2 className="card-header">{team.name}'s friends have endorsed these skills...</h2>

            {team.items?.length > 0 && <ItemsList items={team.items} />}

            <div className="my-4 p-4" style={{ border: "1px dotted #1a1a1a" }}>
                <ItemForm profileId={team._id} />
            </div>
        </div>
    );
};

export default Team;
