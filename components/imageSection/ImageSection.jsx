import { useRef, useState, useEffect } from 'react';

import Image from 'next/image';
import fullImage from '../../assets/images/landing page/broken_assiette.jpg';

import ImageSectionLayout from "./ImageSectionLayout";

export default function imageSection() {

    //parallax

    const test = useRef();

    console.log(test.current);

    const [offsetY, setOffsetY] = useState(0);

    function handleScroll() {
        return setOffsetY(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    //parallax

    return (

        <ImageSectionLayout>
            <Image
                ref={test}
                src={fullImage}
                layout="fill"
                objectFit='cover'
                objectPosition="center"
                quality={80}
                style={{
                    transform: `translateY(${-offsetY * 0.08}px)`
                }}
            />
        </ImageSectionLayout>

    )
}