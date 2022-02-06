import React from "react";

// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import ItemsList from "../components/ItemsList";
import ItemForm from "../components/ItemForm";
import { MailOutlined } from "@ant-design/icons";
import { QUERY_SINGLE_TEAM } from "../utils/queries";

const Team = () => {
    // Use `useParams()` to retrieve value of the route parameter `:profileId`
    const { teamId } = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_TEAM, {
        // pass URL parameter
        variables: { teamId: teamId },
    });
    const styles = {
        btnStyle: {
            background: "#505d8c",
            cursor: "pointer",
            color: "black",
            margin: 5,
        },
    };

    const emailForm = () => {
        window.location.assign("/email");
    };

    const team = data?.team || {};

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h2 className="card-header">Deliver Note created At {team.createdAt}</h2>
            <h2 className="card-header">Deliver to {team.siteInfo}</h2>
            <h2 className="card-header">{team.name}'s items to pick from warehouse...</h2>

            {team.items?.length > 0 && <ItemsList items={team.items} />}

            <div
                className="my-4 p-4"
                //  style={{ border: "1px dotted #1a1a1a" }}
            >
                <ItemForm teamId={team._id} />
            </div>
            <div className="col-12 col-lg-9 ">
                <div className="email">
                    <button className="btn btn-info  py-3" style={styles.btnStyle} onClick={emailForm}>
                        <MailOutlined /> Email Customer and Employee
                    </button>
                    <button className="btn   py-3" style={styles.btnStyle}>
                        <MailOutlined /> Generate PDF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Team;
