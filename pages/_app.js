import Head from "next/head";
import 'tailwindcss/tailwind.css';
import smoothscrollPolyfill from 'smoothscroll-polyfill';
import 'smoothscroll-anchor-polyfill';


if (typeof window !== 'undefined') {
  smoothscrollPolyfill.polyfill();
}

/* eslint-disable react/prop-types */
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Slow Retreats</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
