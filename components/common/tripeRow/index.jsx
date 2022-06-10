import Image from 'next/image';

import styles from './tripleRow.module.scss';

import TripleRowLayout from './tripleRowLayout';

export default function TripleRow({
    firstSrc,
    secondSrc,
    thirdSrc
}) {
    return (
        <TripleRowLayout>
            <div className={styles.firstImage}>
                <Image src={firstSrc} layout="fill" objectFit='cover' quality={100} />
            </div>
            <div className={styles.secondImage}>
                <Image src={secondSrc} layout="fill" objectFit='cover' quality={100} />
            </div>
            <div className={styles.thirdImage}>
                <Image src={thirdSrc} layout="fill" objectFit='cover' quality={100} />
            </div>
        </TripleRowLayout>
    )

}