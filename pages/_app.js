import { useState, useEffect } from "react";
import Context from "../context/zone";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const [zone, setZone] = useState(0);

  useEffect(() => {
    const defaultZone = JSON.parse(window.localStorage.getItem("zone"));

    if (defaultZone) {
      setZone(defaultZone);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("zone", zone);
  }, [zone]);

  return (
    <Context.Provider value={{ zone, setZone }}>
      <div className="app">
        <header></header>
        <Component {...pageProps} />
        <footer></footer>
      </div>
    </Context.Provider>
  );
}

export default MyApp;
