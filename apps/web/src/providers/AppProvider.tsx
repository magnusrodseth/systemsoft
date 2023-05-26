import Layout from "@/components/common/Layout";
import { FC, ReactNode } from "react";
import { darkTheme, globalStyles } from "ui";
import Box from "ui/src/atoms/Box";
import ApolloProvider from "./ApolloProvider";
import { EB_Garamond, Lato } from "@next/font/google";
import Script from "next/script";

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

      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3731844450515812"
        crossOrigin="anonymous"
      ></Script>
    </Box>
  );
};

export default AppProvider;
