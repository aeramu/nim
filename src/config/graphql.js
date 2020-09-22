import ApolloClient from "apollo-boost"

export const client = new ApolloClient({
    uri: 'http://nim-finder-server.herokuapp.com'
})