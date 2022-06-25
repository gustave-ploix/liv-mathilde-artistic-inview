import Image from 'next/image';

import styles from './tripleRow.module.scss';

import TripleRowLayout from './tripleRowLayout';

export default function TripleRow({
    firstSrc,
    secondSrc,
    thirdSrc,
    firstAlt,
    secondAlt,
    thirdAlt
}) {
    return (
        <TripleRowLayout>
            <div className={styles.firstImage}>
                <Image placeholder='blur' src={firstSrc} alt={firstAlt ? firstAlt : "visual research"} layout="fill" objectFit='cover' quality={100} />
            </div>
            <div className={styles.secondImage}>
                <Image placeholder='blur' src={secondSrc} alt={secondAlt ? secondAlt : "visual research"} layout="fill" objectFit='cover' quality={100} />
            </div>
            <div className={styles.thirdImage}>
                <Image placeholder='blur' src={thirdSrc} alt={thirdAlt ? thirdAlt : "visual research"} layout="fill" objectFit='cover' quality={100} />
            </div>
        </TripleRowLayout>
    )

}