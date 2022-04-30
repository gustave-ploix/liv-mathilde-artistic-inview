import { useState } from 'react';
import Image from 'next/image';

import styles from './navbar.module.scss';

import NavbarLayout from './NavbarLayout';

import logo from '../../assets/images/logo.jpg';

export default function Navbar() {

    const [hovering, setHovering] = useState(false);

    return (

        <NavbarLayout>
            <div className={styles.logoContainer}>
                <Image src={logo} alt="artistic (in)View" className={styles.logoImg} />
            </div>

            <div
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                className={styles.navLinks}>
                <p
                    style={{
                        color: hovering ? "gray" : "black"
                    }}
                ><a href="#">ARTISTIC (IN) VIEW STUDIO</a></p>
                <div className={styles.dropdown}>

                    <p
                        style={{
                            color: hovering ? "gray" : "black"
                        }}
                    >
                        <a href="#">
                            ARTWORK
                        </a>
                    </p>
                    <div
                        className={styles.dropdownContent}>
                        <a href="#">DOUSED SILK</a>
                        <a href="#">MY BROKEN THINGS WITH LOVE...</a>
                    </div>
                </div>
                <p
                    style={{
                        color: hovering ? "gray" : "black"
                    }}
                ><a href="#">NUEE</a></p>
                <p
                    style={{
                        color: hovering ? "gray" : "black"
                    }}
                ><a href="#">DESIGN TEXTILE</a></p>
                <p
                    style={{
                        color: hovering ? "gray" : "black"
                    }}
                ><a href="#">VISUAL RESEARCH</a></p>
                <p
                    style={{
                        color: hovering ? "gray" : "black"
                    }}
                ><a href="#">ABOUT</a></p>
                <p
                    style={{
                        color: hovering ? "gray" : "black"
                    }}
                ><a href="#">CONTACT</a></p>
                <p
                    style={{
                        color: hovering ? "gray" : "black"
                    }}
                ><a href="#">HOME</a></p>
            </div>
        </NavbarLayout>

    )

}