import { FC, ReactNode } from "react";
import Box from "ui/atoms/Box";
import Footer from "./Footer";
import NavigationMenu from "ui/organisms/Navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Box css={{ fontFamily: "$sans" }}>
        <NavigationMenu />

        <main>{children}</main>

        <Footer />
      </Box>
    </>
  );
};

export default Layout;
