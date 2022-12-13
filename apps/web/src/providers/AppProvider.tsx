import Layout from "@/components/common/Layout";
import { FC, ReactNode } from "react";
import { darkTheme } from "ui";
import Box from "ui/src/atoms/Box";
import ApolloProvider from "./ApolloProvider";

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <Box className={darkTheme}>
      <ApolloProvider>
        <Layout>{children}</Layout>
      </ApolloProvider>
    </Box>
  );
};

export default AppProvider;
