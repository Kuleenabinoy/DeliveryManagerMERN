import { gql } from "@apollo/client";

export const ADD_TEAM = gql`
    mutation addTeam($name: String!, $siteInfo: String!, $email: String!) {
        addTeam(name: $name, siteInfo: $siteInfo, email: $email) {
            _id
            name
            siteInfo
            email
            createdAt

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
export const LOGIN_USER = gql`
    mutation login($useremail: String!, $password: String!, $usercategory: String!) {
        login(useremail: $useremail, password: $password, usercategory: $usercategory) {
            token
            user {
                _id
                username
                usercategory
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $useremail: String!, $password: String!, $usercategory: String!) {
        addUser(username: $username, useremail: $useremail, password: $password, usercategory: $usercategory) {
            token
            user {
                _id
                username
                usercategory
            }
        }
    }
`;
