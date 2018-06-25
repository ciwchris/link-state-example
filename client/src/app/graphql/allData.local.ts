import gql from 'graphql-tag';

export const allData = gql`
    query allData {
        localData @client {
            name
        }
        serverData @rest(type: "ServerData", path: "values") {
            name
        }
    }
`;

export const serverData = gql`
    query serverData {
        serverData @rest(type: "ServerData", path: "values") {
            name
        }
    }
`;

export const updateServerData = gql`
    mutation updateServerData($name: String!) {
        updateServerData(input: $name) @rest(type: "ServerData", path: "values", method: "PUT") {
            NoResponse
        }
    }
`;

export const updateLocalData = gql`
    mutation updateLocalData($name: String!) {
        updateLocalData(name: $name) @client
    }
`;
