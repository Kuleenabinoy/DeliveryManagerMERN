import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = (props) => {
    const [formState, setFormState] = useState({ useremail: "", password: "", usercategory: "manager" });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState, "login values");
        try {
            const { data } = await login({
                variables: { ...formState },
            });
            console.log("data", data);
            Auth.login(data.login.token);
            if (data.usercategory === "employee") {
                alert("employee");
                window.location.assign("/profile");
            } else {
                alert("manager");
                window.location.assign("/admin");
            }
            // window.location.assign("/admin");
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            usercategory: "",
            email: "",
            password: "",
        });
    };

    return (
        <main className="flex-row justify-center mb-4">
            <div className="col-12 col-lg-10">
                <div className="card">
                    <h4 className="card-header bg-dark text-light p-2">Login</h4>
                    <div className="card-body">
                        {data ? (
                            <p>
                                Success! You may now head <Link to="/">back to the homepage.</Link>
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
                                <button className="btn btn-block btn-info" style={{ cursor: "pointer" }} type="submit">
                                    Submit
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

export default Login;
