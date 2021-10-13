import 'tailwindcss/tailwind.css';
import smoothscrollPolyfill from 'smoothscroll-polyfill';
import 'smoothscroll-anchor-polyfill';

if (typeof window !== 'undefined') {
  smoothscrollPolyfill.polyfill();
}

/* eslint-disable react/prop-types */
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
