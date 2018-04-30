import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApolloModule, Apollo } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { ApolloLink } from 'apollo-link';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ApolloModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo) {
    const cache = new InMemoryCache();

    const stateLink = withClientState({
      cache,
      resolvers: {
        Mutation: {
          updateNetworkStatus: (_, { isConnected }, { cache }) => {
            const data = {
              networkStatus: {
                __typename: 'NetworkStatus',
                isConnected
              }
            };
            cache.writeData({ data });
            return null;
          }
        }
      },
      defaults: {
        networkStatus: {
          __typename: 'NetworkStatus',
          isConnected: false
        }
      }
    });
    apollo.create({
      link: ApolloLink.from([stateLink]),
      cache: cache
    });
  }
}
