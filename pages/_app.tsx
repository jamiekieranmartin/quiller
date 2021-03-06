import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo
        title="quiller"
        description="Offline personal note-taking simplified."
        canonical="https://quiller.vercel.app"
        openGraph={{
          type: "website",
          locale: "en_AU",
          url: "https://quiller.vercel.app",
          site_name: "quiller",
          images: [
            {
              url: "https://quiller.vercel.app/android-chrome-512x512.png",
              width: 800,
              height: 600,
              alt: "quiller",
              type: "image/png",
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png",
          },
          {
            rel: "manifest",
            href: "/site.webmanifest",
          },
          {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
          },
          {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "true",
          },
          {
            href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
            rel: "stylesheet",
          },
        ]}
        additionalMetaTags={[
          {
            name: "mobile-web-app-capable",
            content: "yes",
          },
          {
            name: "application-name",
            content: "quiller",
          },
          {
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            name: "apple-mobile-web-app-status-bar-style",
            content: "default",
          },
          {
            name: "apple-mobile-web-app-title",
            content: "quiller",
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
