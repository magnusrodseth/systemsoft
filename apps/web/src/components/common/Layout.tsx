import { FC, ReactNode } from "react";
import Box from "ui/atoms/Box";
import Footer from "./Footer";
import NavigationMenu from "ui/organisms/NavigationMenu";
import Head from "next/head";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>SystemSoft</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Box css={{ fontFamily: "$sans" }}>
        <NavigationMenu />

        <main>{children}</main>

        <Footer />
      </Box>
    </>
  );
};

export default Layout;
