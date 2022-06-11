import Head from 'next/head';

import Header from '../components/common/header/header';
import headerImage from '../assets/images/degignTextile/header.jpg'

import Title from '../components/designTextile/title';

import FirstGallery from '../components/designTextile/firstGallery';
import SecondGallery from '../components/designTextile/secondGallery';
import ThirdGallery from '../components/designTextile/thirdGallery';
import FourthGallery from '../components/designTextile/fourthGallery';

import Footer from '../components/common/footer';

export default function DesignTextile() {
    return (
        <>
            <Head>
                <title>Design Textile</title>
                <meta name="description" content="page presenting the textile work of liv mathilde mechin." />
                <link rel="shortcut icon" href="favicon.jpeg" type="image/x-icon" />
            </Head>

            <Header headerSrc={headerImage} headerAlt="two pillows made with textiles by liv mathilde mechin" />
            <Title />
            <FirstGallery />
            <SecondGallery />
            <ThirdGallery />
            <FourthGallery />

            <Footer />
        </>
    )
}