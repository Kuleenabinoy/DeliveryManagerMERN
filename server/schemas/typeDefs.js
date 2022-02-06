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
        useremail: String
        usercategory: String
        password: String
        teams: [Team]
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        users: [User]
        user(username: String!, usercategory: String!): User
        teams(username: String): [Team]
        team(teamId: ID!): Team
        me: User
    }

    type Mutation {
        addUser(username: String!, useremail: String!, password: String!, usercategory: String!): Auth
        login(useremail: String!, password: String!, usercategory: String!): Auth
        addTeam(name: String!, siteInfo: String!, email: String!): Team
        addItem(teamId: ID!, item: String!): Team
        removeTeam(teamId: ID!): Team
        removeItem(teamId: ID!, item: String!): Team
    }
`;

module.exports = typeDefs;
//
// teams(username: String): Team
//
