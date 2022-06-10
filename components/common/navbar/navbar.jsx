import Link from 'next/link';
import Image from 'next/image';

import styles from './navbar.module.scss';

import NavbarLayout from './NavbarLayout';

import logo from '../../../assets/images/logo.jpg';

export default function Navbar() {

    return (

        <NavbarLayout>

            <div className={styles.logoContainer}>
                <Link href="/">
                <Image src={logo} alt="artistic (in)View" className={styles.logoImg} />
                </Link>
            </div>

            <div className={styles.navLinks}>
                <Link href="/artistic-in-view-studio"><a className={styles.navLink}>ARTISTIC (IN) VIEW STUDIO</a></Link>
                <div className={styles.dropdown}>

                    <p>
                        <a className={styles.navLink} href="#">ARTWORK</a>
                    </p>
                    <div className={styles.dropdownContent}>
                        <Link href='/doused-silk'><a className={styles.navLink} href="#">DOUSED SILK</a></Link>
                        <Link href='/my-broken-things'><a className={styles.navLink} href="#">MY BROKEN THINGS WITH LOVE...</a></Link>
                    </div>
                </div>
                <Link href='/nuee'><a className={styles.navLink} href="#">NUEE</a></Link>
                <Link href='/'><a className={styles.navLink} href="#">DESIGN TEXTILE</a></Link>
                <Link href='/'><a className={styles.navLink} href="#">VISUAL RESEARCH</a></Link>
                <Link href='/about'><a className={styles.navLink} href="#">ABOUT</a></Link>
                <Link href='/contact'><a className={styles.navLink} href="#">CONTACT</a></Link>
            </div>
        </NavbarLayout>

    )

}