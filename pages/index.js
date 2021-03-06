
import Head from 'next/head'
import AboutSection from '../components/landingPage/aboutSection/aboutSection'
import Contact from '../components/landingPage/contact/contact'
import Herobanner from '../components/landingPage/Herobanner/herobanner'
import ImageSection from '../components/landingPage/imageSection/ImageSection'

import styles from '../styles/Home.module.css'
import Footer from '../components/common/footer'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Liv MATHILDE MECHIN</title>
        <meta name="description" content="landing page of the liv mathilde mechin's website" />
        <link rel="icon" href="/favicon.jpeg" />
      </Head>

      <Herobanner />
      <AboutSection /> 
      <ImageSection />
      <Contact />

      <Footer />
    
    </div>
  )
}
