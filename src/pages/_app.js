import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { pageview } from "../utils/GTag";
import '../styles/App.scss';
import Head from 'next/head';
import { useAppConfig } from "src/hooks/useAppConfig";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useAppConfig()

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <>
    <Head>
      <title>{'Frontend Developer with strong focus on React and React Native. Based in Łódź but willing to work remotely 🙃'}</title>
    </Head>
    <Component {...pageProps} />
  </>;
};

export default App;
