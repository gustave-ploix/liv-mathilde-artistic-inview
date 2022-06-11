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
                <Image placeholder='blur' src={firstSrc} alt="visual research" layout="fill" objectFit='cover' quality={100} />
            </div>
            <div className={styles.secondImage}>
                <Image placeholder='blur' src={secondSrc} alt="visual research" layout="fill" objectFit='cover' quality={100} />
            </div>
            <div className={styles.thirdImage}>
                <Image placeholder='blur' src={thirdSrc} alt="visual research" layout="fill" objectFit='cover' quality={100} />
            </div>
        </TripleRowLayout>
    )

}