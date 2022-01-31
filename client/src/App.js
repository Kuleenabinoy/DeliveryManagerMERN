import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";

const client = new ApolloClient({
    uri: "/graphql",
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
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/signup">
                            <Signup />
                        </Route>
                        {/* <Route exact path="/profiles/:username">
                            <Profile />
                        </Route> */}
                        {/* <Route exact path="/me">
                            <Profile />
                        </Route> */}
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
