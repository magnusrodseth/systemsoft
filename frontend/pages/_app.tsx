import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import React from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/dist/client/router";
import capitalize from "utils/capitalize";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const escapeLayout = router.pathname == "/404";

  const isHomePage = router.pathname == "/";

  return escapeLayout ? (
    <Component {...pageProps} />
  ) : (
    <Layout
      title={isHomePage ? "Home" : capitalize(router.pathname.substring(1))}
    >
      <Component {...pageProps} />
    </Layout>
  );
};
export default App;
