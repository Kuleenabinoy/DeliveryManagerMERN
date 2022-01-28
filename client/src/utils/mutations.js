import { gql } from "@apollo/client";

export const ADD_TEAM = gql`
    mutation addTeam($name: String!) {
        addTeam(name: $name) {
            _id
            name
            items
        }
    }
`;

export const ADD_ITEM = gql`
    mutation addItem($teamId: ID!, $item: String!) {
        addItem(teamId: $teamId, item: $item) {
            _id
            name
            items
        }
    }
`;
