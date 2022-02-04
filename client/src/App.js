import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Employee from "./pages/Employee";
import Email from "./pages/Email";
//import ProfileForm from "./components/ProfileForm";
//import HomeEmployee from "./pages/HomeEmployee";

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("id_token");
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});
const httpLink = createHttpLink({
    uri: "/graphql",
});
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            {/* Wrap page elements in Router component to keep track of location state */}
            <Router>
                <div className="flex-column justify-flex-start min-100-vh">
                    <Header />
                    <div className="container">
                        {/* Define routes to render different page components at different paths */}
                        <Route exact path="/admin">
                            <Home />
                        </Route>
                        <Route exact path="/">
                            <Login />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/signup">
                            <Signup />
                        </Route>
                        <Route exact path="/logout">
                            <Login />
                        </Route>
                        <Route exact path="/employee">
                            <Employee />
                        </Route>
                        <Route exact path="/me">
                            <Employee />
                        </Route>
                        <Route exact path="/employee/:username">
                            <Employee />
                        </Route>

                        <Route exact path="/email">
                            <Email />
                        </Route>

                        {/* Define a route that will take in variable data */}
                        <Route exact path="/teams/:teamId">
                            <Team />
                        </Route>
                    </div>
                    <Footer />
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
