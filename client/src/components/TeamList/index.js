import React from "react";
//import { REMOVE_TEAM } from "../../utils/mutations";
// Import Link component for all internal application hyperlinks
import { Link } from "react-router-dom";
//import { useMutation } from "@apollo/client";
//import { QUERY_TEAMS } from "../../utils/queries";
import { DeleteOutlined, DownSquareOutlined } from "@ant-design/icons";
const styles = {
    cardStyle: {
        background: "#505d8c",
        margin: 5,
    },
};
const deleteTeam = () => {};
const TeamList = ({ teams, title }) => {
    if (!teams.length) {
        // console.log(teams.length, "teamslength");
        return <h3>No Employee Added </h3>;
    }

    return (
        <div>
            <h3 className="text-primary">{title}</h3>
            <div className="flex-row justify-space-between my-4">
                {teams &&
                    teams.map((team) => (
                        <div key={team._id} className="col-12 col-xl-6">
                            <div className="card mb-3">
                                <h4 style={styles.cardStyle} className=" card card-header  text-light p-2 m-0">
                                    {team.name} <br />
                                    {team.email}
                                    <br />
                                    <span className="text-white" style={{ fontSize: "1rem" }}>
                                        currently has {team.items ? team.items.length : 0} item
                                        {team.items && team.items.length === 1 ? "" : "s"} to deliver
                                    </span>
                                    <br />
                                    <span style={{ fontSize: "1rem" }}>Created at {team.createdAt}</span>
                                </h4>

                                {/* Use <Link> component to create an internal hyperlink reference. Use `to` prop to set the path instead of `href` */}
                                <Link className="btn btn-block btn-squared btn-light text-dark" to={`/teams/${team._id}`}>
                                    View and add their items.
                                    <DownSquareOutlined />
                                </Link>
                                {/* <Link className="btn btn-block btn-squared btn-light text-dark" onClick={deleteTeam}>
                                    Delete <DeleteOutlined />
                                </Link> */}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default TeamList;
