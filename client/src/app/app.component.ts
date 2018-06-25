import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { serverData, updateServerData, updateLocalData, allData } from './graphql/allData.local';
import { ServerData, AllData } from './typings/types.local';

@Component({
    selector: 'app-root',
    template: `<strong>Local data:</strong>&nbsp;<input type="text" [(ngModel)]="localName" />
        <button (click)="updateLocalName()">Update</button><br />
        <strong>Local data cache value:</strong> {{cacheLocalName}}<br />
        <strong>Server data:</strong>&nbsp;<input type="text" [(ngModel)]="serverName" />
        <button (click)="updateServerName()">Update</button><br />
        <strong>Server data cache value:</strong> {{cacheServerName}} <button (click)="getServerName()">Re-retrieve</button>`
})
export class AppComponent implements OnInit {
    localName: string;
    cacheLocalName: string;
    serverName: string;
    cacheServerName: string;

    constructor(private apollo: Apollo) {}

    ngOnInit(): void {
        this.apollo
            .watchQuery<AllData.Query>({
                query: allData
            })
            .valueChanges.pipe(
                map(result => {
                    this.localName = result.data.localData.name;
                    this.cacheLocalName = this.localName;
                    this.serverName = result.data.serverData.name;
                    this.cacheServerName = this.serverName;
                })
            )
            .subscribe();
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

    public updateLocalName() {
        this.apollo
            .mutate({
                mutation: updateLocalData,
                variables: {
                    name: this.localName
                }
            })
            .subscribe();
    }
}
