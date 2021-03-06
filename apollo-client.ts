import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://caviar-admin.herokuapp.com/graphql",
  cache: new InMemoryCache(),
  ssrMode: false,
});

export default client;
