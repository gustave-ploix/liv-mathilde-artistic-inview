import Navbar from '../components/common/navbar/navbar';
import HamburgerMenu from '../components/common/hamburgerMenu/hamburger';

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
