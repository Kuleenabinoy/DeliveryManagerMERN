import React from "react";
// Import Link component for all internal application hyperlinks
import { Link } from "react-router-dom";

const TeamList = ({ teams, title }) => {
    if (!teams.length) {
        return <h3>No Profiles Yet</h3>;
    }

    return (
        <div>
            <h3 className="text-primary">{title}</h3>
            <div className="flex-row justify-space-between my-4">
                {teams &&
                    teams.map((team) => (
                        <div key={team._id} className="col-12 col-xl-6">
                            <div className="card mb-3">
                                <h4 className="card-header bg-dark text-light p-2 m-0">
                                    {team.name} <br />
                                    <span className="text-white" style={{ fontSize: "1rem" }}>
                                        currently has {team.items ? team.items.length : 0} item
                                        {team.items && team.items.length === 1 ? "" : "s"} to deliver
                                    </span>
                                </h4>

                                {/* Use <Link> component to create an internal hyperlink reference. Use `to` prop to set the path instead of `href` */}
                                <Link className="btn btn-block btn-squared btn-light text-dark" to={`/teams/${team._id}`}>
                                    View and add their items.
                                </Link>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default TeamList;
