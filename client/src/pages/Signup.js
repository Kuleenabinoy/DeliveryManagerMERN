import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
    const [formState, setFormState] = useState({
        username: "",
        useremail: "",
        password: "",
        usercategory: "",
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState, "signup values");

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });
            //new code added here
            Auth.login(data.addUser.token);
            // window.location.assign("/admin");
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main className="flex-row justify-center mb-4">
            <div className="col-12 col-lg-10">
                <div className="card">
                    <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
                    <div className="card-body">
                        {data ? (
                            <p>
                                Success Created a new member to your team! You may now head{" "}
                                <Link to="/admin">back to the admin page to add items.</Link>
                            </p>
                        ) : (
                            <form onSubmit={handleFormSubmit}>
                                <label>Select Employee Category</label>
                                <select
                                    className="form-input"
                                    value={formState.value}
                                    onChange={handleChange}
                                    name="usercategory"
                                >
                                    <option value="manager">Manager</option>
                                    <option value="employee">Employee</option>
                                </select>

                                {/* <input
                                    className="form-input"
                                    placeholder="Employee Category"
                                    name="usercategory"
                                    type="text"
                                    value={formState.value}
                                    onChange={handleChange}
                                /> */}
                                <label>UserName</label>
                                <input
                                    className="form-input"
                                    placeholder="Your username"
                                    name="username"
                                    type="text"
                                    value={formState.name}
                                    onChange={handleChange}
                                />
                                <label>Email</label>
                                <input
                                    className="form-input"
                                    placeholder="Your email"
                                    name="useremail"
                                    type="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                />
                                <label>Password</label>
                                <input
                                    className="form-input"
                                    placeholder="******"
                                    name="password"
                                    type="password"
                                    value={formState.password}
                                    onChange={handleChange}
                                />
                                <button className="btn btn-block btn-primary" style={{ cursor: "pointer" }} type="submit">
                                    Sign Up
                                </button>
                            </form>
                        )}

                        {error && <div className="my-3 p-3 bg-danger text-white">{error.message}</div>}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Signup;
