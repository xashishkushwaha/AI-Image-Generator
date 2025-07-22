import React, { useState, useEffect } from "react";
import Head from "next/head";
import Cookies from "js-cookie";
import "../styles/globals.css";

//INTERNAL IMPORT
import { Auth } from "../Components/index";

export default function App({ Component, pageProps }) {
  const [auth, setAuth] = useState(true);
  useEffect(() => {
    const storedCookieValue = Cookies.get("token");

    if (storedCookieValue) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  }, []);
  return (
    <>
      <Head>
        <title>AI Image ART</title>
        <meta
          name="description"
          content="AI Image Art Generator powered by @xashishkushwaha"
        />
        <link rel="shortcut icon" href={`/assets/ailogo.png`} />
      </Head>
      {auth && <Auth />}

      <Component {...pageProps} />
    </>
  );
}
