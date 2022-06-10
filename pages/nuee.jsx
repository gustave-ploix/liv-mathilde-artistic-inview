import Head from 'next/head';

import Header from '../components/common/header/header';
import headerImage from '../assets/images/nuee/header.jpg';

import Gallery from '../components/nuee/gallery';

import Title from '../components/nuee/title';

import Footer from '../components/common/footer';
import SecondTitle from '../components/nuee/secondTitle';
import NueeGallery from '../components/nuee/nueeGallery';

export default function Nuee() {
    

    return (
        <>
            <Header headerSrc={headerImage} headerAlt="a drape made by liv mathilde mechin for her society Nuée." />
            <Title />
            <Gallery />
            <SecondTitle />
            <NueeGallery />

            <Footer />
        </>
    )
}