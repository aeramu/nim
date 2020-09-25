import {ApolloClient, InMemoryCache} from '@apollo/client'

export const client = new ApolloClient({
    // uri: 'https://nim-finder-server.herokuapp.com',
    uri: "https://owlfchiagi.execute-api.ap-southeast-1.amazonaws.com/graphql",
    cache: new InMemoryCache(),
})