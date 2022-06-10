import Head from 'next/head';

import Contact from "../components/landingPage/contact/contact";
import Footer from '../components/common/footer';

export default function ContactPage() {
    return (
        <section>
            <Head>
                <title>Contact</title>
                <link rel="shortcut icon" href="favicon.jpeg" type="image/x-icon" />
                <meta name="description" content="contact page for the liv mathilde's website" />
            </Head>

            <Contact />
            <Footer />
        </section>
    )
}