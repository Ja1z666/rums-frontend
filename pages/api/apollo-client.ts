import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const link = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include'
})

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  cache: new InMemoryCache(),
  link
});

export default client;