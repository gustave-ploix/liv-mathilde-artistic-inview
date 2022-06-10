import Image from 'next/image';

import styles from './header.module.scss';

import HeaderLayout from './headerLayout';

export default function Header({headerSrc, headerAlt, propClassname}) {
    return (
        <HeaderLayout>
            <div className={propClassname != null ? propClassname : styles.headerContainer}>
            <Image src={headerSrc} alt={headerAlt} layout='fill' quality={100} objectFit='cover' />
            </div>
        </HeaderLayout>
    )
}