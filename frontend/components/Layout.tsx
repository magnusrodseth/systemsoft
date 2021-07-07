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
<meta
          name="description"
          content="The official homepage for SystemSoft AS, a software engineering consulting company based in Asker, Norway."
        />
        <meta name="keywords" content="Software, Engineering, Norway, Embedded, Linux, C, C++, Kongsberg, Thales, Consulting" />
        
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header>
        <Navbar />
      </header>

      <main className="mt-16 min-h-container">{children}</main>

      <Footer pageProps="" />

    </div>
  );
};

export default Layout;
