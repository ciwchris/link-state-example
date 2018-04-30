import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { networkStatus, updateNetworkStatus } from './graphql/networkStatus.local';
import { NetworkStatus } from './typings/types.local';

@Component({
  selector: 'app-root',
  template: `Connected: {{ isConnected }}
        <button (click)="toggleConnection()">Toggle</button>`
})
export class AppComponent implements OnInit {
  isConnected: boolean;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery<NetworkStatus.Query>({
        query: networkStatus
      })
      .valueChanges.pipe(
        map(result => {
          this.isConnected = result.data.networkStatus.isConnected;
        })
      )
      .subscribe();
  }

  public toggleConnection() {
    this.apollo
      .mutate({
        mutation: updateNetworkStatus,
        variables: {
          isConnected: !this.isConnected
        }
      })
      .subscribe();
  }
}
