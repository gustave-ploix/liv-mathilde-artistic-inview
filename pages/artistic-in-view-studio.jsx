import Head from 'next/head';

import ImageWrapper from '../components/AIVS/ImageWrapper';
import TextWrapper from '../components/AIVS/TextWrapper';
import HeaderWrapper from '../components/AIVS/HeaderWrapper';

import Footer from '../components/common/footer';

import raniaImage from '../assets/images/AIVS/rania.jpg';
import researchGoldRing from '../assets/images/AIVS/research_gold_ring.png';
import researchYellowPull from '../assets/images/AIVS/research_yellow_pull.jpg';
import researchYellowPull2 from '../assets/images/AIVS/research_yellow_pull_2.jpg';


import styles from '../components/AIVS/ImageWrapper/imageWrapper.module.scss';

export default function ArtisticInViewStudio() {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="favicon.jpeg" type="image/x-icon" />
                <title>Artistic (in) view studio</title>
                <meta name="description" content="page presenting the Artistic in view studio, a collaboration between Liv Mathilde Mechin and Virginie Pérocheau" />
            </Head>
            <HeaderWrapper />
            <TextWrapper />
            <ImageWrapper image1={researchYellowPull2} image2={null} containerName={styles.firstContainer} classname={styles.firstImage} />
            <ImageWrapper image1={researchGoldRing} image2={null} containerName={styles.secondContainer} classname={styles.secondImage} />
            <ImageWrapper image1={researchYellowPull} image2={raniaImage} containerName={styles.thirdContainer} classname={styles.thirdWrapper} />

            <Footer />
        </>
    )
}