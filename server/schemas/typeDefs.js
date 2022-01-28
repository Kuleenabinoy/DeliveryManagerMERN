const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Team {
        _id: ID
        name: String
        items: [String]!
    }

    type Query {
        teams: [Team]!
        team(teamId: ID!): Team
    }

    type Mutation {
        addTeam(name: String!): Team
        addItem(teamId: ID!, item: String!): Team
        removeTeam(teamId: ID!): Team
        removeItem(teamId: ID!, item: String!): Team
    }
`;

module.exports = typeDefs;
