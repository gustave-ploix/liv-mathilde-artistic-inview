import Image from 'next/image';

import HeaderLayout from './headerLayout';

import headerImage from '../../../assets/images/MBTWL/header.jpg';

import styles from './header.module.scss';

export default function Header() {
    return (
        <HeaderLayout>
            <Image src={headerImage} alt="broken chair photographied" layout='fill' objectFit='cover' />
        </HeaderLayout>
    )
}