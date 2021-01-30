import { useState, useEffect } from "react";
import { blue } from "tailwindcss/colors";
import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from 'nprogress';

import Context from "../context/zone";
import "../styles/globals.scss";

Router.onRouteChangeStart = () => {
  NProgress.start();
}

Router.onRouteChangeComplete = () => {
  NProgress.done();
}

Router.onRouteChangeError = () => {
  NProgress.done();
}

function MyApp({ Component, pageProps }) {
  const [zone, setZone] = useState(0);

  useEffect(() => {
    const defaultZone = window.localStorage.getItem("zone");

    if (defaultZone) {
      setZone(defaultZone);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("zone", zone);
  }, [zone]);

  return (
    <Context.Provider value={{ zone, setZone }}>
      <Head>
        <title>Che bidone esce domani?????</title>
      </Head>
      <div className="app">
        <header>
          <Link href="/">
            <a>Home</a>
          </Link>
        </header>
        <Component {...pageProps} />
        <footer></footer>
      </div>
      <style jsx>{`
        a {
          color: ${blue["500"]};
        }
      `}</style>
    </Context.Provider>
  );
}

export default MyApp;
