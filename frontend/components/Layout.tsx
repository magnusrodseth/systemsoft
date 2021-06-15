import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: any;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title} - SystemSoft AS</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header>
        <Navbar />
      </header>

      <main className="mt-20 min-h-container">{children}</main>

      <Footer pageProps="" />
    </div>
  );
};

export default Layout;
