import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { serverData, updateServerData } from './graphql/serverData.local';
import { ServerData } from './typings/types.local';

@Component({
    selector: 'app-root',
    template: `<strong>Server data:</strong>&nbsp;<input type="text" [(ngModel)]="serverName" />
        <button (click)="updateServerName()">Update</button><br />
        <strong>Server data cache value:</strong> {{cacheServerName}} <button (click)="getServerName()">Re-retrieve</button>`
})
export class AppComponent implements OnInit {
    serverName: string;
    cacheServerName: string;

    constructor(private apollo: Apollo) {}

    ngOnInit(): void {
        this.getServerName();
    }

    public getServerName() {
        this.apollo
            .query<ServerData.Query>({
                query: serverData,
                fetchPolicy: 'network-only'
            })
            .pipe(
                map(result => {
                    this.serverName = result.data.serverData.name;
                    this.cacheServerName = this.serverName;
                })
            )
            .subscribe();
    }

    public updateServerName() {
        this.apollo
            .mutate({
                mutation: updateServerData,
                variables: {
                    name: this.serverName
                }
            })
            .subscribe();
    }
}
