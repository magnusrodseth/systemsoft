import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import React from "react";
import Layout from "../components/Layout";
import client from "../utils/createUrqlClient";
import { Provider } from "urql";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider value={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};
export default App;
