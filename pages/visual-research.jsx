import Head from 'next/head';

import Header from '../components/common/header/header';
import headerImage from '../assets/images/visualResearch/header.jpg';

import Title from '../components/visualResearch/title';
import Gallery from '../components/visualResearch/gallery';

import styles from '../components/common/header/header.module.scss';

import Footer from '../components/common/footer';

export default function VisualResearch() {
    return (
        <>
            <Head>
                <title>Visual research</title>
                <link rel="shortcut icon" href="favicon.jpeg" type="image/x-icon" />
                <meta name="description" content="Page presenting the visual researchs of Liv Mathilde Mechin" />
            </Head>


            <Header headerSrc={headerImage} propClassname={styles.smallerHeader} headerAlt="two research made by liv mathilde mechin." />
            <Title />
            <Gallery />

            <Footer />
        </>
    )
}