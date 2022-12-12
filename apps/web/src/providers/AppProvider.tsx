import Layout from "@/components/common/Layout";
import { FC, ReactNode } from "react";
import ApolloProvider from "./ApolloProvider";

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <>
      <ApolloProvider>
        <Layout>{children}</Layout>
      </ApolloProvider>
    </>
  );
};

export default AppProvider;
