import React from "react";
import { useQuery } from "@apollo/client";

import TeamList from "../components/TeamList";
import TeamForm from "../components/TeamForm";

import { QUERY_TEAMS } from "../utils/queries";

const Home = () => {
    const { loading, data } = useQuery(QUERY_TEAMS);
    const teams = data?.teams || [];

    return (
        <main>
            <div className="flex-row justify-center">
                <div className="col-12 col-md-10 mb-3 p-3" style={{ border: "1px dotted #1a1a1a" }}>
                    <TeamForm />
                </div>

                <div className="col-12 col-md-10 my-3">
                    {loading ? <div>Loading...</div> : <TeamList teams={teams} title="Items Scheduled for delivery" />}
                </div>
            </div>
        </main>
    );
};

export default Home;
