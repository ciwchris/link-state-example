import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ApolloModule, Apollo } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { RestLink } from 'apollo-link-rest';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, ApolloModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(apollo: Apollo) {
        const cache = new InMemoryCache();

        const restLink = new RestLink({
            uri: 'api/',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        apollo.create({
            link: ApolloLink.from([restLink]),
            cache: cache
        });
    }
}
