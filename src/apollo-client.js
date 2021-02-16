import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        character: {
          merge: true,
        },
      },
    },
  },
});

const client = new ApolloClient({
  cache,
  uri: "https://rickandmortyapi.com/graphql/",
});

export default client;
