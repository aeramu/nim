import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client'
import fetch from 'node-fetch'


const link = createHttpLink({
    uri: "https://owlfchiagi.execute-api.ap-southeast-1.amazonaws.com/graphql",
    fetch: fetch,
})

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
})