import Navbar from '../components/navbar/navbar';
import HamburgerMenu from '../components/hamburgerMenu/hamburger';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <>

      <Navbar />
      <HamburgerMenu />

      <Component {...pageProps}/>
    </>
  )
}

export default MyApp
