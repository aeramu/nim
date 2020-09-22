import React from 'react'
import {ApolloProvider} from '@apollo/client'
import {client} from './src/config/graphql'
import Home from './src/screens/Home'

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Home/>
    </ApolloProvider>
  );
}
