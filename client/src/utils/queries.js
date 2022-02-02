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

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            useremail
            usercategory
            teams {
                _id
                siteinfo
                createdAt

                items
            }
        }
    }
`;
export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            useremail
            usercategory
            teams {
                _id
                siteinfo
                createdAt
                items
            }
        }
    }
`;
