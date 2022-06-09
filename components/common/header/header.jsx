import Image from 'next/image';

import HeaderLayout from './headerLayout';

export default function Header({headerSrc, headerAlt}) {
    return (
        <HeaderLayout>
            <Image src={headerSrc} alt={headerAlt} layout='fill' objectFit='cover' />
        </HeaderLayout>
    )
}