import { useState, useEffect } from 'react';

import Navbar from '../components/navbar/navbar';
import HamburgerMenu from '../components/hamburgerMenu/hamburger';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  let windowWidth;

  useEffect(() => {
    windowWidth = window.innerWidth
  }, [])
  const [width, setWidth] = useState(windowWidth);
  
  
  useEffect(() => {
    const handleResise = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResise);
    return () => window.removeEventListener("resize", handleResise)
  }, [])

  const breakpoint = 1120;

  return (
    <>
    {width < breakpoint ? <HamburgerMenu /> : <Navbar />}

      <Component {...pageProps}/>
    </>
  )
}

export default MyApp
