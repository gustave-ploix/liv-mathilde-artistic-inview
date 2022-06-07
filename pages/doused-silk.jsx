import Head from 'next/head';

import HeaderWrapper from '../components/dousedSilk/HeaderWrapper';

import Footer from '../components/common/footer';

export default function DousedSilk() {
    return (
        <>
            <Head>
                <title>Doused Silk</title>
                <link rel="shortcut icon" href="favicon.jpeg" type="image/x-icon" />
            </Head>
            <HeaderWrapper />
            <Footer /> 
        </>
    )
}