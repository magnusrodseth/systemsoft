import { FC, ReactNode } from "react";
import Box from "ui/atoms/Box";
import Footer from "./Footer";
import NavigationMenu from "ui/organisms/NavigationMenu";
import Head from "next/head";
import { darkTheme, globalStyles } from "ui";
import Button from "ui/atoms/Button";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  // Apply global styles
  globalStyles();

  return (
    <Box css={{ width: "100%", height: "100vh", backgroundColor: "$mauve1" }}>
      <Head>
        <title>SystemSoft</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Box className={darkTheme} css={{ fontFamily: "$sans" }}>
        <NavigationMenu />

        <main>{children}</main>

        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
