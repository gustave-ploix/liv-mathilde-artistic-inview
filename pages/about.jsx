import Head from 'next/head';

import AboutSection from '../components/landingPage/aboutSection/aboutSection';
import Footer from '../components/common/footer';


export default function About() {
    return (
        <section style={{
            // backgroundColor: "red",⋅
            position: "relative",
            top: "50px",

        }}>
            <Head>
                <title>About</title>
                <meta name="description" content="about page for the liv mathilde's website" />
            </Head>
            <AboutSection />
            <Footer />
        </section>
    )
}