import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import React from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/dist/client/router";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const escapeLayout = router.pathname == "/404";

  return escapeLayout ? (
    <Component {...pageProps} />
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};
export default App;
