import Layout from "@/components/common/Layout";
import { FC, ReactNode } from "react";
import { darkTheme, globalStyles } from "ui";
import Box from "ui/src/atoms/Box";
import ApolloProvider from "./ApolloProvider";
import { EB_Garamond, Lato } from "@next/font/google";

type AppProviderProps = {
  children: ReactNode;
};

const garamond = EB_Garamond({
  subsets: ["latin"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  // Apply global styles
  globalStyles();

  const style = `${garamond.className} ${lato.className} ${darkTheme}`;

  return (
    <Box className={style}>
      <ApolloProvider>
        <Layout>{children}</Layout>
      </ApolloProvider>
    </Box>
  );
};

export default AppProvider;
