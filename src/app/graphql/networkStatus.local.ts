import gql from 'graphql-tag';

export const networkStatus = gql`
  query networkStatus {
    networkStatus @client {
      isConnected
    }
  }
`;

export const updateNetworkStatus = gql`
  mutation updateNetworkStatus($isConnected: Boolean) {
    updateNetworkStatus(isConnected: $isConnected) @client
  }
`;
