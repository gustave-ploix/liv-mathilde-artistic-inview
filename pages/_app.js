import Head from 'next/head';

import Navbar from '../components/common/navbar/navbar';
import HamburgerMenu from '../components/common/hamburgerMenu/hamburger';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        {/* supreme font */}
        <link href="https://api.fontshare.com/v2/css?f[]=supreme@1&display=swap" rel="stylesheet" /> 

        {/* general sans font */}
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@1&display=swap" rel="stylesheet"></link>
      </Head>

      <Navbar />
      <HamburgerMenu />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
