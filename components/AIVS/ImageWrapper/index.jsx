import ImageWrapperLayout from './imageWrapperLayout';

import Image from 'next/image';

import styles from './imageWrapper.module.scss';

export default function imageWrapper({ image1, image2, classname }) {

    if (image2 != null) {
        return (
            <ImageWrapperLayout>
                <div className={classname}>
                    <div className={styles.equalSizes}>
                        <Image src={image1} quality="100" layout='fill' objectPosition="top" objectFit='cover' />
                    </div>
                    <div className={styles.equalSizes}>
                        <Image src={image2} quality="100" layout='fill' objectPosition="bottom" objectFit='cover' />
                    </div>
                </div>
            </ImageWrapperLayout>
        )
    } else {
        return (
            <ImageWrapperLayout>
                <div className={classname}>
                    <Image src={image1} layout="fill" objectFit='cover' objectPosition="center" quality="100" />
                </div>
            </ImageWrapperLayout>
        )
    }

}