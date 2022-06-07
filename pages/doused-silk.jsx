import Head from 'next/head';

import HeaderWrapper from '../components/dousedSilk/HeaderWrapper';
import TitleContainer from '../components/dousedSilk/titleContainer';

import Footer from '../components/common/footer';

export default function DousedSilk() {
    return (
        <>
            <Head>
                <title>Doused Silk</title>
                <link rel="shortcut icon" href="favicon.jpeg" type="image/x-icon" />
                <meta name="description" content="page presenting the work of Liv Mathilde Mechin, photography on tissue" />
            </Head>
            <HeaderWrapper />
            <TitleContainer />
            <Footer /> 
        </>
    )
}