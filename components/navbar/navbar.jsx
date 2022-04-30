import Image from 'next/image';

import styles from './navbar.module.scss';

import NavbarLayout from './NavbarLayout';

import logo from '../../assets/images/logo.jpg';

export default function Navbar() {

    return (

        <NavbarLayout>
            <div className={styles.logoContainer}>
                <Image src={logo} alt="artistic (in)View" className={styles.logoImg} />
            </div>

            <div className={styles.navLinks}>
                <p><a href="#">ARTISTIC (IN) VIEW STUDIO</a></p>
                <p><a href="#">ARTWORK</a></p>
                <p><a href="#">NUEE</a></p>
                <p><a href="#">DESIGN TEXTILE</a></p>
                <p><a href="#">VISUAL RESEARCH</a></p>
                <p><a href="#">ABOUT</a></p>
                <p><a href="#">CONTACT</a></p>
                <p><a href="#">HOME</a></p>
            </div>
        </NavbarLayout>

    )

}