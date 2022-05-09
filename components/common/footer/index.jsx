import FooterLayout from './footerLayout';

import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

import styles from './footer.module.scss';

export default function Footer() {
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

                <p className={styles.navLink}><a href="#">NUÉE</a></p>
                <p className={styles.navLink}><a href="#">TEXTILE DESIGN</a></p>
                <p className={styles.navLink}><a href="#">VISUAL RESEARCH</a></p>
                <p className={styles.navLink}><a href="#">ABOUT</a></p>
                <p className={styles.navLink}><a href="#">CONTACT</a></p>
                <p className={styles.navLink}><a href="#">HOME</a></p>
                <p className={styles.navLink}><a href="#">CREDITS</a></p>
                </div>
            </div>
        </FooterLayout>
    )
}