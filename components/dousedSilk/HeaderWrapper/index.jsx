import { useEffect } from 'react';

import Image from 'next/image';

import headerImage from '../../../assets/images/landing page/heroBanner.jpg';

import HeaderWrapperLayout from './headerWrapperLayout';

import styles from './HeaderWrapper.module.scss';

export default function HeaderWrapper() {
    
    
    
    return (
        <HeaderWrapperLayout>
            <Image src={headerImage} quality={100} layout="responsive"/>
        </HeaderWrapperLayout>
    )
}