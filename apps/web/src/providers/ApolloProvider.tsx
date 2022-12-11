import { ReactNode } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as _ApolloProvider,
  gql,
} from "@apollo/client";
import { GRAPHQL_ENDPOINT } from "@/constants";

type ApolloProviderProps = {
  children: ReactNode;
};

const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

const ApolloProvider: React.FC<ApolloProviderProps> = ({ children }) => {
  return <_ApolloProvider client={client}>{children}</_ApolloProvider>;
};

export default ApolloProvider;
