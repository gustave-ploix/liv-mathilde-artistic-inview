import { useRef } from 'react';

import HeroLayout from "./heroLayout";

import styles from './herobanner.module.scss';

import Image from 'next/image';
import imgHeroBanner from '../../assets/images/landing page/heroBanner.jpg';

export default function Herobanner() {

    const imageContainer = useRef();

    function handleScrollView() {
        console.log(imageContainer.current)
        imageContainer.current.scrollIntoView({ behavior: "smooth"})
    }

    return (

        <HeroLayout>
            <div  className={styles.bannerContainer}>

                <Image
                objectPosition="center"
                    layout="fill"
                    objectFit="cover"
                    quality={80}
                    src={imgHeroBanner} />
                <div className={styles.cartel}>
                    <h1>artistic (<i>IN</i>)View</h1>
                    <h2>Liv Mathilde Méchin</h2>
                    <div className={styles.separator}></div>
                    <div className={styles.linkContainer}>
                        <p>
                            <a href="#">VISAL RESEARCH DESIGNER </a>
                            -
                            <em> COULEURS & MATIÈRE </em>
                            -
                            <a href="#"> DESIGN TEXTILE</a>
                        </p>
                        <p>
                            <a href="#">DIRECTION ARTISTIQUE & CRÉATIVE </a>
                            -
                            <em> PHOTO STYLINE</em>
                        </p>
                    </div>
                        <div
                            ref={imageContainer}
                            onClick={handleScrollView}
                        className={styles.arrowContainer}>
                            <div className={styles.arrowBranch}></div>
                            <div className={styles.arrowBranch}></div>
                        </div>
                </div>
            </div>
        </HeroLayout>

    )
}