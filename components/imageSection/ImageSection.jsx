import Image from 'next/image';
import fullImage from '../../assets/images/landing page/broken_assiette.jpg';

import ImageSectionLayout from "./ImageSectionLayout";

import styles from './imageSection.module.scss';

export default function imageSection() {
    return (

        <ImageSectionLayout>
            <Image
                src={fullImage}
                layout="fill"
                objectFit='cover'
                objectPosition="center"
                quality={80}
            />
        </ImageSectionLayout>

    )
}