import Image from 'next/image';

import FullPageGalleryLayout from "./fullPageGalleryLayout";

import styles from './fullPageGallery.module.scss';

export default function FullPageGallery({propSrc, propAlt}) {
    return (
        <FullPageGalleryLayout>
            <Image placeholder='blur' src={propSrc} alt={propAlt} layout="fill" objectFit='cover' quality={100}/>
        </FullPageGalleryLayout>
    )
}