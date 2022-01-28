import { gql } from "@apollo/client";

export const QUERY_TEAMS = gql`
    query allTeams {
        teams {
            _id
            name
            siteInfo
            email
            createdAt
            items
        }
    }
`;

export const QUERY_SINGLE_TEAM = gql`
    query singleTeam($teamId: ID!) {
        team(teamId: $teamId) {
            _id
            name
            siteInfo
            email
            createdAt
            items
        }
    }
`;
