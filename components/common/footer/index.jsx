import Router from 'next/router';

import Link from 'next/link';

import FooterLayout from './footerLayout';

import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

import styles from './footer.module.scss';

export default function Footer() {
 
    function scrollToTop() {
        window.scrollTo({
            top: -1000,
            behavior: "smooth"
        })
        // console.log("blabla")
    }


    return (
        <FooterLayout>
            <div className={styles.socialContainer}>
                <p className={styles.logoSVG}>
                    <BsLinkedin />
                </p>

                <p className={styles.logoSVG}>
                    <BsInstagram />
                </p>
            </div>

            <div className={styles.separator}></div>

            <div className={styles.navLinkContainer}>
                <div className={styles.hoverableContainer}>

                <Link href="/nuee#top">
                    <p className={styles.navLink}>NUÉE</p>
                </Link>
                <Link href="/design-textile#top">
                    <p className={styles.navLink}><a href="#">TEXTILE DESIGN</a></p>
                </Link>
                <Link href="/visual-research#top">
                    <p className={styles.navLink}><a href="#">VISUAL RESEARCH</a></p>
                </Link>
                <Link href="/about#top">
                    <p className={styles.navLink}><a href="#">ABOUT</a></p>
                </Link>
                <Link href="/contact#top">
                    <p className={styles.navLink}><a href="#">CONTACT</a></p>
                </Link>
                <Link href="/">
                    <p className={styles.navLink}><a href="#">HOME</a></p>
                </Link> 
                <Link href="/" scroll={true}>
                    <p className={styles.navLink}>CREDITS</p>
                </Link>
                </div>
            </div>
        </FooterLayout>
    )
}