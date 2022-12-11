import ApolloProvider from "@/providers/ApolloProvider";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
