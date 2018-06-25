/* tslint:disable */
export namespace AllData {
    export type Variables = {};

    export type Query = {
        __typename?: "Query";
        localData: LocalData;
        serverData: ServerData;
    };

    export type LocalData = {
        __typename?: "LocalData";
        name: string;
    };

    export type ServerData = {
        __typename?: "ServerData";
        name: string;
    };
}
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
export namespace UpdateLocalData {
    export type Variables = {
        name: string;
    };

    export type Mutation = {
        __typename?: "Mutation";
        updateLocalData?: string | null;
    };
}
