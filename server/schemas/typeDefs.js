const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Team {
        _id: ID
        name: String
        siteInfo: String
        email: String
        createdAt: String
        items: [String]!
    }
    type User {
        _id: ID
        username: String
        email: String
        employeeCategory: String
        password: String
        teams: [Team]!
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        users: [User]
        user(username: String!, employeeCategory: String!): User
        teams(username: String): Team
        teams: [Team]!
        team(teamId: ID!): Team
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!, employeeCategory: String!): Auth
        login(email: String!, password: String!): Auth
        addTeam(name: String!, siteInfo: String!, email: String!): Team
        addItem(teamId: ID!, item: String!): Team
        removeTeam(teamId: ID!): Team
        removeItem(teamId: ID!, item: String!): Team
    }
`;

module.exports = typeDefs;
