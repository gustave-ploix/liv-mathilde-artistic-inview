import ImageWrapperLayout from './imageWrapperLayout';

import Image from 'next/image';

import styles from './imageWrapper.module.scss';

export default function imageWrapper({ image1, image2 }) {

    if (image2 != null) {
        return (
            <ImageWrapperLayout>
                <div className={styles.galleryContainer}>
                    <Image src={image1} />
                    <Image src={image2} />
                </div>
            </ImageWrapperLayout>
        )
    } else {
        return (
            <ImageWrapperLayout>
                <div className={styles.imageContainer}>
                    <Image src={image1} />
                </div>
            </ImageWrapperLayout>
        )
    }

}