import Image from 'next/image';

import MosaicLayout from './mosaicLayout';

import styles from './mosaic.module.scss';

export default function Mosaic({
    src01,
    src02,
    src03,
    src04,
    alt01,
    alt02,
    alt03,
    alt04
}) {
    return (
        <MosaicLayout>
            <div className={styles.photo01}>
                <Image src={src01} alt={alt01} quality={100} objectFit="cover" layout="fill" />
            </div>
            <div className={styles.photo02}>
                <Image src={src02} alt={alt02} quality={100} objectFit="cover" layout="fill" />
            </div>
            <div className={styles.photo03}>
                <Image src={src03} alt={alt03} quality={100} objectFit="cover" layout="fill" />
            </div>
            <div className={styles.photo04}>
                <Image src={src04} alt={alt04} quality={100} objectFit="cover" layout="fill" />
            </div>
        </MosaicLayout>
    )
}