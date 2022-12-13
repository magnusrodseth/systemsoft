import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Head from "next/head";
import { darkTheme, globalStyles, theme } from "ui";
import Box from "ui/src/atoms/Box";
import Navbar from "./Navbar";
import useIsDarkStore from "@/store/isDark";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  // Apply global styles
  globalStyles();

  const { isDark } = useIsDarkStore();

  return (
    <Box
      className={isDark ? darkTheme : theme}
      css={{
        width: "100%",
        height: "100vh",
        backgroundColor: "$mauve1",
        color: "$mauve12",
        fontFamily: "$sans",
      }}
    >
      <Head>
        <title>SystemSoft</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Box
        css={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />

        <main>
          <Box>{children}</Box>
        </main>

        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
