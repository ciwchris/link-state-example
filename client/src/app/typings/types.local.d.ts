/* tslint:disable */
export namespace ServerData {
    export type Variables = {};

    export type Query = {
        __typename?: "Query";
        serverData: ServerData;
    };

    export type ServerData = {
        __typename?: "ServerData";
        name: string;
    };
}
export namespace UpdateServerData {
    export type Variables = {
        name: string;
    };

    export type Mutation = {
        __typename?: "Mutation";
        updateServerData?: string | null;
    };
}
