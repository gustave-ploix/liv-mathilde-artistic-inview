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
                    <a href='https://www.instagram.com/livmathilde/' target="_blank" aria-label='instagram outlink' rel='noopener noreferrer' className={styles.logoSVG}>
                        <BsLinkedin />
                    </a>

                <a href='https://www.linkedin.com/in/livmathildeartisticinview/' aria-label='linkedin outlink' target="_blank" rel='noopener noreferrer' className={styles.logoSVG}>
                    <BsInstagram />
                </a>
            </div>

            <div className={styles.separator}></div>

            <div className={styles.navLinkContainer}>
                <div className={styles.hoverableContainer}>

                <Link href="/nuee#top">
                    <p className={styles.navLink}>NUÉE</p>
                </Link>
                <Link href="/design-textile#top">
                    <p className={styles.navLink}>TEXTILE DESIGN</p>
                </Link>
                <Link href="/visual-research#top">
                    <p className={styles.navLink}>VISUAL RESEARCH</p>
                </Link>
                <Link href="/about#top">
                    <p className={styles.navLink}>ABOUT</p>
                </Link>
                <Link href="/contact#top">
                    <p className={styles.navLink}>CONTACT</p>
                </Link>
                <Link href="/#top">
                    <p className={styles.navLink}>HOME</p>
                </Link> 
                <Link href="/credits#top">
                    <p className={styles.navLink}>CREDITS</p>
                </Link>
                </div>
            </div>
        </FooterLayout>
    )
}