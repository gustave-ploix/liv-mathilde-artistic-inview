import Head from "next/head"

import CreditsComp from "../components/credits"
import Footer from '../components/common/footer'

export default function Credits() {
    return (
        <div>
            <Head>
                <title>Credits</title>
                <meta name="description" content="page presenting the credits for the website" />
            </Head>
            <CreditsComp />
            <Footer />
        </div>
    )
}