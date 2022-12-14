import Layout from "@/components/common/Layout";
import { FC, ReactNode } from "react";
import { darkTheme, globalStyles } from "ui";
import Box from "ui/src/atoms/Box";
import ApolloProvider from "./ApolloProvider";

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  // Apply global styles
  globalStyles();

  return (
    <Box className={darkTheme}>
      <ApolloProvider>
        <Layout>{children}</Layout>
      </ApolloProvider>
    </Box>
  );
};

export default AppProvider;
