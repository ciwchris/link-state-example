import gql from 'graphql-tag';

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
