import { useRef, useEffect, useState } from 'react';
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


    //parallax

    const [offsetY, setOffsetY] = useState(0);

    function handleScroll() {
        return setOffsetY(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    //parallax

    return (

        <HeroLayout>
            <div  className={styles.bannerContainer}>

                <Image
                objectPosition="center"
                    layout="fill"
                    placeholder='blur'
                    objectFit="cover"
                    quality={100}
                    src={imgHeroBanner}
                    style={{
                        transform: `translateY(${offsetY * 0.5}px)`
                    }} />
                <div className={styles.cartel}>
                    <h1>artistic (<i>IN</i>)View</h1>
                    <h2>Liv Mathilde Méchin</h2>
                    <div className={styles.separator}></div>
                    <div className={styles.linkContainer}>
                        <p>
                            <a href="#">VISAL RESEARCH DESIGNER </a>
                            <em> COULEURS & MATIÈRE </em>
                            <a href="#"> DESIGN TEXTILE</a>
                        </p>
                        <p>
                            <a href="#">DIRECTION ARTISTIQUE & CRÉATIVE </a>
                            <em> PHOTO STYLING</em>
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