import Head from "next/head";
import { Fragment } from "react";
import { initializeApp } from "firebase/app";

import "../styles/globals.css";
import { firebaseConfig } from "../firebase/firebaseConfig";

function MyApp({ Component, pageProps }) {
  initializeApp(firebaseConfig);
  return (
    <Fragment>
      <Head>
        <title>Disney+ clone</title>
        <meta name="description" content="Disney+ clone using Next JS, React" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
