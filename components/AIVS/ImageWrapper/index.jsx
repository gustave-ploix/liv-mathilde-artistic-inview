import ImageWrapperLayout from './imageWrapperLayout';

import Image from 'next/image';

import styles from './imageWrapper.module.scss';

export default function imageWrapper({ image1, image2, classname, containerName }) {

    if (image2 != null) {
        return (
            <ImageWrapperLayout secondLayerClassname={containerName}>
                <div className={classname}>
                    <div className={styles.equalSizes}>
                        <Image src={image1} alt="image" quality="100" layout='fill' objectPosition="top" objectFit='cover' />
                    </div>
                    <div className={styles.equalSizes}>
                        <Image src={image2} alt="image" quality="100" layout='fill' objectPosition="bottom" objectFit='cover' />
                    </div>
                </div>
            </ImageWrapperLayout>
        )
    } else {
        return (
            <ImageWrapperLayout secondLayerClassname={containerName}>
                <div className={classname}>
                    <Image src={image1} alt="image" layout="fill" objectFit='cover' objectPosition="center" quality="100" />
                </div>
            </ImageWrapperLayout>
        )
    }

}