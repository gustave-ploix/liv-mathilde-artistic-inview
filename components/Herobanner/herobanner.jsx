import HeroLayout from "./heroLayout";

import styles from './herobanner.module.scss';

import Image from 'next/image';
import imgHeroBanner from '../../assets/images/landing page/heroBanner.jpg';

export default function Herobanner() {
    return (

        <HeroLayout>
            <Image src={imgHeroBanner}/>
        </HeroLayout>

    )
}