import { useState, useEffect } from "react";
import Link from 'next/link';

import Image from 'next/image';
import logo from '../../../assets/images/logo.jpg';

import HamburgerLayout from "./hamburgerLayout";

import styles from './hamburger.module.scss';

export default function HamburgerMenu() {

    const [openned, setOpenned] = useState(false);;

    return (

        <HamburgerLayout>

            <div className={styles.hamburgerNavbar}>
                <div
                    onClick={() => setOpenned(!openned)}
                    className={styles.hamburgerBtn}
                    style={{
                        position: openned ? "fixed" : "absolute"
                    }}>
                    <div className={openned ? styles.opennedBtn : styles.button}></div>
                    <div className={openned ? styles.opennedBtn : styles.button}></div>
                </div>

                <Image
                    alt="logo Image"
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
                    <Link href="/artistic-in-view-studio"><a>ARTISTIC (IN)VIEW STUDIO</a></Link>
                    <div>
                        <Link href="/"><a> ARTWORK</a></Link>
                        <Link href="/"><a className={styles.dropdownLinks} href="#">........DOUSED SILK</a></Link>
                        <Link href="/"><a>........MY BROKEN THINGS WITH LOVE</a></Link>
                    </div>
                    <Link href="/"><a>NUEE</a></Link>
                    <Link href="/"><a>DESIGN TEXTILE</a></Link>
                    <Link href="/"><a>VISUAL RESEARCH</a></Link>
                    <Link href="/"><a>ABOUT</a></Link>
                    <Link href="/"><a>CONTACT</a></Link>
                </div>

            </section>

        </HamburgerLayout>

    )
}