import {ApolloClient, InMemoryCache} from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://nim-finder-server.herokuapp.com',
    cache: new InMemoryCache(),
})