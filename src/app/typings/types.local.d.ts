/* tslint:disable */
export namespace NetworkStatus {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";
    networkStatus: NetworkStatus;
  };

  export type NetworkStatus = {
    __typename?: "NetworkStatus";
    isConnected: boolean;
  };
}
export namespace UpdateNetworkStatus {
  export type Variables = {
    isConnected?: boolean | null;
  };

  export type Mutation = {
    __typename?: "Mutation";
    updateNetworkStatus?: boolean | null;
  };
}
