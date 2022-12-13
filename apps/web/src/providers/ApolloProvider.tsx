import { ReactNode } from "react";
import { ApolloProvider as _ApolloProvider } from "@apollo/client";
import client from "@/lib/apollo";

type ApolloProviderProps = {
  children: ReactNode;
};

const ApolloProvider: React.FC<ApolloProviderProps> = ({ children }) => {
  return <_ApolloProvider client={client}>{children}</_ApolloProvider>;
};

export default ApolloProvider;
