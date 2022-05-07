import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextSeo
        title="quiller"
        description="Personal note-taking simplified."
        canonical="https://quiller.vercel.app"
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
