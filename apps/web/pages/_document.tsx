import SEO from "@/components/SEO";
import { API_ENDPOINT } from "@/constants";
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { getCssText } from "ui";

const Document = () => {
  return (
    <Html lang="no">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <SEO />
        <link rel="preconnect" href={API_ENDPOINT} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export const getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await NextDocument.getInitialProps(ctx);
  return { ...initialProps };
};

export default Document;
