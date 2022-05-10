import Link from 'next/link';
import Image from 'next/image';

import styles from './navbar.module.scss';

import NavbarLayout from './NavbarLayout';

import logo from '../../../assets/images/logo.jpg';

export default function Navbar() {

    return (

        <NavbarLayout>

            <div className={styles.logoContainer}>
                <Image src={logo} alt="artistic (in)View" className={styles.logoImg} />
            </div>

            <div className={styles.navLinks}>
                <Link href="/artistic-in-view-studio"><a className={styles.navLink}>ARTISTIC (IN) VIEW STUDIO</a></Link>
                <div className={styles.dropdown}>

                    <p>
                        <a className={styles.navLink} href="#">ARTWORK</a>
                    </p>
                    <div className={styles.dropdownContent}>
                        <Link href='/'><a className={styles.navLink} href="#">DOUSED SILK</a></Link>
                        <Link href='/'><a className={styles.navLink} href="#">MY BROKEN THINGS WITH LOVE...</a></Link>
                    </div>
                </div>
                <Link href='/'><a className={styles.navLink} href="#">NUEE</a></Link>
                <Link href='/'><a className={styles.navLink} href="#">DESIGN TEXTILE</a></Link>
                <Link href='/'><a className={styles.navLink} href="#">VISUAL RESEARCH</a></Link>
                <Link href='/'><a className={styles.navLink} href="#">ABOUT</a></Link>
                <Link href='/'><a className={styles.navLink} href="#">CONTACT</a></Link>
                <Link href='/'><a className={styles.navLink} href="#">HOME</a></Link>
            </div>
        </NavbarLayout>

    )

}