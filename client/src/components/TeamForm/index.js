import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_TEAM } from "../../utils/mutations";
import { QUERY_TEAMS } from "../../utils/queries";
//if admin login show this form
const TeamForm = () => {
    const [name, setName] = useState("");
    const [siteInfo, setSiteInfo] = useState("");
    const [email, setEmail] = useState("");
    const [addTeam, { error }] = useMutation(ADD_TEAM, {
        update(cache, { data: { addTeam } }) {
            try {
                const { teams } = cache.readQuery({ query: QUERY_TEAMS });

                cache.writeQuery({
                    query: QUERY_TEAMS,
                    data: { teams: [...teams, addTeam] },
                });
            } catch (e) {
                console.error(e);
            }
        },
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addTeam({
                variables: { name, siteInfo, email },
            });

            setName("");
            setSiteInfo("");
            setEmail("");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h3>Add employee Information and site address ...</h3>
            <form className="flex-row justify-center justify-space-between-md align-center" onSubmit={handleFormSubmit}>
                <div className="col-12 col-lg-9">
                    <label>Employee Name</label>
                    <input
                        placeholder="Add the name of delivery person ..."
                        value={name}
                        className="form-input w-100"
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className="col-12 col-lg-9">
                    <label>Employee Email</label>
                    <input
                        placeholder="Add the email of delivery person ..."
                        value={email}
                        className="form-input w-100"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="col-12 col-lg-9">
                    <label>Site Address</label>
                    <input
                        placeholder="Add site address to deliver..."
                        value={siteInfo}
                        className="form-input w-100"
                        onChange={(event) => setSiteInfo(event.target.value)}
                    />
                </div>
                <div className="col-12 col-lg-3">
                    <button className="btn btn-info btn-block py-3" type="submit">
                        Add Delivery Note
                    </button>
                </div>
                {error && <div className="col-12 my-3 bg-danger text-white p-3">Something went wrong...</div>}
            </form>
        </div>
    );
};

export default TeamForm;
