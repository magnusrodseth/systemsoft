import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>SystemSoft AS</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header>
        <Navbar />
      </header>

      <main className="mt-20">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
