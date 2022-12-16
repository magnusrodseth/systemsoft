import AppProvider from "@/providers/AppProvider";
import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Component {...pageProps} />

      <Analytics />
    </AppProvider>
  );
};

export default App;
