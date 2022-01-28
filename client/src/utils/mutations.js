import { gql } from "@apollo/client";

export const ADD_TEAM = gql`
    mutation addTeam($name: String!, $siteInfo: String!) {
        addTeam(name: $name, siteInfo: $siteInfo) {
            _id
            name
            siteInfo
            items
        }
    }
`;

export const ADD_ITEM = gql`
    mutation addItem($teamId: ID!, $item: String!) {
        addItem(teamId: $teamId, item: $item) {
            _id
            name
            siteInfo
            items
        }
    }
`;
