import Image from 'next/image';

import RowGalleryLayout from './rowGalleryLayout';

import styles from './rowGallery.module.scss';

export default function rowGallery({firstSrc, firstAlt, secondSrc, secondAlt}) {
    
    return (
        <RowGalleryLayout>

            <div className={styles.photoOne}>
                <Image src={firstSrc} alt={firstAlt} quality={100} layout="fill" objectFit='cover'/>
            </div>
            <div className={styles.photoTwo}>
                <Image src={secondSrc} alt={secondAlt} quality={100} layout="fill" objectFit='cover'/>
            </div>
        </RowGalleryLayout>
    )
}