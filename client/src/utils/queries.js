import { gql } from "@apollo/client";

export const QUERY_TEAMS = gql`
    query allTeams {
        teams {
            _id
            name
            items
        }
    }
`;

export const QUERY_SINGLE_TEAM = gql`
    query singleTeam($teamId: ID!) {
        team(teamId: $teamId) {
            _id
            name
            items
        }
    }
`;
