import Head from 'next/head';

import Footer from '../components/common/footer';

export default function MyBrokenThings() {
    return (
        <>
            <Head>
                <meta name="description" content="page presenting the work of liv mathilde mechin about broken things that we think it's not valuable anymore, but with an artistic point of view." />
                <link rel="shortcut icon" href="favicon.jpeg" type="image/x-icon" />
                <title>My broken things</title>
            </Head>

            <Footer />
        </>
    )
}