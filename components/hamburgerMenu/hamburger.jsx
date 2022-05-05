import { useState, useEffect } from "react";

import Image from 'next/image';
import logo from '../../assets/images/logo.jpg';

import HamburgerLayout from "./hamburgerLayout";

import styles from './hamburger.module.scss';

export default function HamburgerMenu() {

    const [openned, setOpenned] = useState(false);;

    useEffect(() => {
        setOpenned(false);
    }, []);

    return (

        <HamburgerLayout >

            <div className={styles.hamburgerNavbar}>
                <div
                    onClick={() => setOpenned(!openned)}
                    className={styles.hamburgerBtn}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                {/* <img src="../../assets/images/logo.jpg" alt="" /> */}
                <Image 

                    width={136}
                    height={43}
                    objectFit="contain"
                    src={logo} 
                    className={styles.logo}
                />

            </div>
            <section className={styles.navigationSection}

                style={{

                    left: openned ? "0px" : "-100%"

                }}

            >

                <div className={styles.navLinksContainer}>
                    <p><a href="#">ARTISTIC (IN)VIEW STUDIO</a></p>
                    <p><a href="#"> ARTWORK (DROPDOWN)</a></p>
                    <p><a href="#">NUEE</a></p>
                    <p><a href="#">DESIGN TEXTILE</a></p>
                    <p><a href="#">VISUAL RESEARCH</a></p>
                    <p><a href="#">ABOUT</a></p>
                    <p><a href="#">CONTACT</a></p>
                </div>

            </section>

        </HamburgerLayout>

    )
}